import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Contex';
import { storage, firestore } from '../../../firebase';
import RequireAdminAuth from '../RequireAdminAuth';
import './Setting.css';

export default function Setting() {
  const { mainData } = useContext(Context);
  const [arrayCarousel, setArrayCarousel] = useState([]);
  const [arrayNews, setArrayNews] = useState([]);
  const [progress, setProgress] = useState(false);
  const [progressNews, setProgressNews] = useState(false);
  const [progressCarousel, setProgressCarousel] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (mainData) {
      setArrayCarousel(mainData[0].carousel);
      setArrayNews(mainData[0].news);
    }
  }, [mainData]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    handleUpload('carousel', arrayCarousel, setArrayCarousel);
    setProgressCarousel(true);
  };
  
  const handleUploadNewsClick = () => {
    handleUpload('news', arrayNews, setArrayNews);
    setProgressNews(true);
  };

  const handleUpload = (folderPath, array) => {
    if (image) {
      const uploadTask = storage.ref(`${folderPath}/${image.name}`).put(image);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress);
          console.log(`Progress: ${progress}%`);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(folderPath)
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log('Image URL:', url);
              firestore
                .collection('data')
                .doc('RvwOmHHKyWpAChE4gdTQ')
                .update({
                  [folderPath]: [...array, url],
                })
                .then(() => {
                  setProgress('Файл добавлен');
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                  console.log('URL сохранен в Firestore');
                })
                .catch((error) => {
                  console.log('Ошибка сохранения URL:', error);
                  setProgress('Ошибка добавления файла');
                });
            });
        }
      );
    }
  };

  const handleDelete = (url, folderPath, array) => {
    const imageRef = storage.refFromURL(url);
    imageRef
      .delete()
      .then(() => {
        setProgress('Изображение удалено');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        console.log('Изображение удалено из хранилища');
      })
      .catch((error) => {
        console.log('Ошибка удаления изображения из хранилища:', error);
        setProgress('Ошибка удаления изображения');
      });

    const updatedArray = array.filter((item) => item !== url);
    firestore
      .collection('data')
      .doc('RvwOmHHKyWpAChE4gdTQ')
      .update({
        [folderPath]: updatedArray,
      })
      .then(() => {
        console.log('Изображение удалено из массива в Firebase');
      })
      .catch((error) => {
        console.log('Ошибка удаления изображения из массива в Firebase:', error);
      });
  };

  return (
    <RequireAdminAuth>
      <div className="setting">
        <div className="setting-carusel">
          <p className="setting-carusel__title">Зображення на головній сторінці</p>
          <div className="setting-carusel__box">
            {arrayCarousel.map((item, index) => (
              <div key={index} className="setting-carusel__item">
                <img src={item} className="setting-carusel__item-image" alt="..." />
                <button className="setting-carusel__item-delete" onClick={() => handleDelete(item, 'carousel', arrayCarousel, setArrayCarousel, setProgressCarousel(true))}>Видалити</button>
              </div>
            ))}
          </div>

          <div className="setting-upload">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUploadClick} className="setting-upload__button">Додати зображення</button>
          </div>
          {progressCarousel ? <div className="setting-carusel__progress">{progress}</div> : null}
        </div>

        <div className="setting-news">
          <p className="setting-carusel__title">Новини на головній сторінці</p>

          <div className="setting-carusel__box">
            {arrayNews.map((item, index) => (
              <div key={index} className="setting-carusel__item">
                <img src={item} className="setting-carusel__item-image" alt="..." />
                <button className="setting-carusel__item-delete" onClick={() => handleDelete(item, 'news', arrayNews, setArrayNews, setProgressNews(true))}>Видалити</button>
              </div>
            ))}
          </div>

          <div className="setting-upload">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUploadNewsClick} className="setting-upload__button">Додати зображення</button>
          </div>
          {progressNews ? <div className="setting-carusel__progress">{progress}</div> : null}

        </div>
      </div>
    </RequireAdminAuth>
  );
}

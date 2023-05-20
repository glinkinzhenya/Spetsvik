import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Contex';
import { storage, firestore } from '../../../firebase';
import RequireAdminAuth from '../RequireAdminAuth';
import './Setting.css';

export default function Setting() {
  const { mainData } = useContext(Context);
  const [mainData2, setMainData] = useState([]);
  const [progress, setProgress] = useState(false); // Добавлено состояние для прогресса

  useEffect(() => {
    if (mainData) {
      setMainData(mainData[0].carousel);
    }
  }, [mainData]);

  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };


  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`carousel/${image.name}`).put(image);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress); // Обновление состояния прогресса
          console.log(`Progress: ${progress}%`);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref('carousel')
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log('Image URL:', url);
              firestore
                .collection('data')
                .doc('RvwOmHHKyWpAChE4gdTQ')
                .update({
                  carousel: [...mainData2, url],
                })
                .then(() => {
                  setProgress('Файл додано');
                  setTimeout(() => {
                    window.location.reload();
                  }, 2000);
                  console.log('URL сохранен в Firestore');
                })
                .catch((error) => {
                  console.log('Ошибка сохранения URL:', error);
                  setProgress('Помилка додавання');
                });
            });
        }
      );
    }
  };

  const handleDelete = (url) => {
    const imageRef = storage.refFromURL(url);
    imageRef
      .delete()
      .then(() => {
        setProgress('Зображення видалено');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        console.log('Изображение удалено из хранилища');
      })
      .catch((error) => {
        console.log('Ошибка удаления изображения из хранилища:', error);
        setProgress('Помилка видалення зображення');
      });

    const updatedCarousel = mainData2.filter((item) => item !== url);
    firestore
      .collection('data')
      .doc('RvwOmHHKyWpAChE4gdTQ')
      .update({
        carousel: updatedCarousel,
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
            {mainData2.map((item, index) => (
              <div key={index} className="setting-carusel__item">
                <img src={item} className="setting-carusel__item-image" alt="..." />
                <button className="setting-carusel__item-delete" onClick={() => handleDelete(item)}>Видалити</button>
              </div>
            ))}
          </div>

          <div className="setting-upload">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} className="setting-upload__button">Додати зображення</button>
          </div>
          {progress ? <div className="setting-carusel__progress">{progress}</div> : <div></div>}
        </div>

        <div className="setting-news">
          <p className="setting-carusel__title">Новини на головній сторінці</p>

          <div className="setting-carusel__box">
            {mainData2.map((item, index) => (
              <div key={index} className="setting-carusel__item">
                <img src={item} className="setting-carusel__item-image" alt="..." />
                <button className="setting-carusel__item-delete" onClick={() => handleDelete(item)}>Видалити</button>
              </div>
            ))}
          </div>


        </div>


      </div>
    </RequireAdminAuth>
  );
}

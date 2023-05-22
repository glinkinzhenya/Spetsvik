import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Contex';
import { storage, firestore } from '../../../firebase';
import RequireAdminAuth from '../RequireAdminAuth';
import './Setting.css';

export default function Setting() {
  const { mainData } = useContext(Context);
  const [arrayCarousel, setArrayCarousel] = useState([]);
  const [arrayNews, setArrayNews] = useState([]);
  const [arrayProduct, setArrayProduct] = useState([]);
  const [progress, setProgress] = useState(false);
  const [progressNews, setProgressNews] = useState(false);
  const [progressCarousel, setProgressCarousel] = useState(false);
  const [image, setImage] = useState(null);

  const [product, setProduct] = useState({
    title: '',
    description: '',
    category: '',
  });

  console.log(product);


  useEffect(() => {
    if (mainData) {
      setArrayCarousel(mainData[0].carousel);
      setArrayNews(mainData[0].news);
      setArrayProduct(mainData[0].product);
    }
  }, [mainData]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // добавление информации о товаре
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };



  // клик карусели
  const handleUploadClick = () => {
    handleUpload('carousel', arrayCarousel);
    setProgressCarousel(true);
  };

  // клик новостей
  const handleUploadNewsClick = () => {
    handleUpload('news', arrayNews);
    setProgressNews(true);
  };

  // клик продукта
  const handleUploadProductsClick = () => {
    handleUpload('product', arrayProduct, product);
  };

  const handleUpload = (folderPath, array, product) => {
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

              // Определяем обновление, которое нужно выполнить
              let update = {};
              product ? update = { [folderPath]: [...array, { ...product, img: url }] } : update = { [folderPath]: [...array, url] };

              firestore
                .collection('data')
                .doc('RvwOmHHKyWpAChE4gdTQ')
                .update(update)  // Применяем обновление
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

    const updatedArray = array.filter((item) => item.img !== url);
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
                <button className="setting-carusel__item-delete" onClick={() => handleDelete(item, 'carousel', arrayCarousel, setProgressCarousel(true))}>Видалити</button>
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
                <button className="setting-carusel__item-delete" onClick={() => handleDelete(item, 'news', arrayNews, setProgressNews(true))}>Видалити</button>
              </div>
            ))}
          </div>

          <div className="setting-upload">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUploadNewsClick} className="setting-upload__button">Додати зображення</button>
          </div>
          {progressNews ? <div className="setting-carusel__progress">{progress}</div> : null}

        </div>

        <div className="setting-product">
          <p className="setting-carusel__title">Товар</p>

          <div className="setting-product__box">
            {arrayProduct.map((item, index) => (
              <div key={index} className="setting-product__box-items">
                <div className="setting-product__box-item">
                  <div className='setting-product__box-item__picture'>
                    <img className='setting-product__box-item__img' src={item.img} alt="..." />
                  </div>
                  <div className='setting-product__box-item-info'>
                    <div className='setting-product__box-item-info__title'>{item.title}</div>
                    <div className='setting-product__box-item-info__description'>{item.description}</div>
                    <div className='setting-product__box-item-info__category'>{item.category}</div>
                  </div>
                </div>
                <button className="setting-carusel__item-delete" onClick={() => handleDelete(item.img, 'product', arrayProduct, setProgressNews(true))}>Видалити</button>
              </div>
            ))}
          </div>

          <div className="setting-product__inputs">
            <input type="file" onChange={handleFileChange} />
            <input className="setting-product__input" name="title" onChange={handleInputChange} value={product.title} type="text" placeholder='Назва товару' />
            <input className="setting-product__input" name="description" onChange={handleInputChange} value={product.description} type="text" placeholder='Ціна' />
            <select onChange={handleInputChange} name="category" value={product.category}>
              <option value="Взуття">Взуття</option>
              <option value="2">Зеленый</option>
              <option value="3">Желтый</option>
              <option value="4">Красный</option>
              <option value="5">Оранжевый</option>
              <option value="6">Черный</option>
            </select>
            <button onClick={handleUploadProductsClick} className="setting-product__button">Додати товар</button>
          </div>
          {progressNews ? <div className="setting-carusel__progress">{progress}</div> : null}

        </div>

      </div>
    </RequireAdminAuth>
  );
}

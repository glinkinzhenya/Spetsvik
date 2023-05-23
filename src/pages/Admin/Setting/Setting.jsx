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
  const [progressProduct, setProgressProduct] = useState(false);
  const [image, setImage] = useState(null);

  const categoryArray = [
    'халати рабочі',
    'медичний, кухарський, клінінговий одяг',
    'теплий спецодяг',
    'костюми робочі',
    'головні убори',
    'фартухи робочі',
  ]


  const [product, setProduct] = useState({
    title: '',
    description: '',
    category: '',
    popular: 'ні',
  });

  console.log(product);

  useEffect(() => {
    if (mainData) {
      setArrayCarousel(mainData[0].carousel);
      setArrayNews(mainData[0].news);
      setArrayProduct(mainData[0].product);
      // setFilterValue(mainData[0].product)
    }
  }, [mainData]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // добавление информации о товаре
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setProduct((prevProduct) => ({ ...prevProduct, [name]: checked ? 'так' : 'ні' }));
    } else {
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
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
    setProgressProduct(true);
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


  // фильт для отображения товаров
  const [selectedCategory, setSelectedCategory] = useState('Всі товари');
  const [showPopular, setShowPopular] = useState(false);

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangeShowPopular = (event) => {
    setShowPopular(event.target.checked);
  };

  const filteredProducts = arrayProduct.filter((item) => {
    if (selectedCategory === 'Всі товари') {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  const displayedProducts = showPopular
    ? filteredProducts.filter((item) => item.popular === 'так' && item.category === selectedCategory)
    : filteredProducts;


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

          <div className='setting-product__flex'>

            <p className="setting-carusel__title">Товар</p>
            <select className='setting-product__select' onChange={handleChangeCategory}>
              <option>Всі товари</option>
              {categoryArray.map((item) => (
                <option>{item}</option>
              ))}
            </select>

            <label className='setting-product__change'>
              <input name="popular" type="checkbox" onChange={handleChangeShowPopular} disabled={selectedCategory === 'Всі товари'} />
              Показати популярні
            </label>

          </div>




          <div className="setting-product__box">
            {displayedProducts.map((item, index) => (
              <div key={index} className="setting-product__box-items">
                <div className="setting-product__box-item">
                  <div className='setting-product__box-item__picture'>
                    <img className='setting-product__box-item__img' src={item.img} alt={item.img} />
                  </div>
                  <div className='setting-product__box-item-info'>
                    <div className='setting-product__box-item-info__title'>{item.title}</div>
                    <div className='setting-product__box-item-info__description'>{item.description}</div>
                    <div className='setting-product__box-item-info__category'>{item.category}</div>
                    <div className='setting-product__box-item-info__popular'>Популярні: {item.popular}</div>
                  </div>
                </div>
                <button className="setting-carusel__item-delete" onClick={() => handleDelete(item.img, 'product', arrayProduct, setProgressProduct(true))}>Видалити</button>
              </div>
            ))}
          </div>

          <div className="setting-product__inputs">
            <input type="file" onChange={handleFileChange} />
            <input className="setting-product__input" name="title" onChange={handleInputChange} value={product.title} type="text" placeholder='Назва товару' />
            <input className="setting-product__input" name="description" onChange={handleInputChange} value={product.description} type="text" placeholder='Ціна' />
            <select onChange={handleInputChange} name="category" value={product.category}>
              <option>Обрати категорію</option>
              {categoryArray.map((item) => (
                <option>{item}</option>
              ))}
            </select>
            <label>
              <input name="popular" type="checkbox" onChange={handleInputChange} value={product.popular} />
              Додати у популярні
            </label>
            <button onClick={handleUploadProductsClick} className="setting-product__button">Додати товар</button>
          </div>
          {progressProduct ? <div className="setting-carusel__progress">{progress}</div> : null}

        </div>

      </div>
    </RequireAdminAuth>
  );
}

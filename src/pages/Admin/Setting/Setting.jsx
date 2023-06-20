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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [editProductOrigin, setEditProductOrigin] = useState(null);

  const categoryArray = [
    'халати робочі',
    'медичний, кухарський, клінінговий одяг',
    'утеплений спецодяг',
    'костюми робочі',
    'захисний спецодяг',
    'фартухи робочі',
    'головні убори',
    'шапки',
    'засоби захисту рук',
    'засоби захисту очей, обличчя, голови',
    'засоби захисту органів дихання',
    'сигнальна продукція',
    'зимове спецвзуття',
    'літнє спецвзуття',
    // 'низьке спецвзуття',
    // 'високе спецвзуття',
    'зимове військове взуття',
    'літнє військове взуття',
    // 'низьке військове взуття',
    // 'високе військове взуття',
    'вогнегасники порошкові',
    'вогнегасники вуглекислотні',
    'підставки та кріплення під вогнегасники',
    'комплектуючі до вогнегасників',
    'пожежні шафи',
    'пожежні щити та стенди',
    'пожежний інвентар',
    'ящики пожежні',
    'рукава пожежні напірні',
    'стволи пожежні',
    'головки пожежні з’єднувальні',
    'крани пожежні, клапани пожежні, вентилі пожежного крану',
    'пожежні колонки и гідранти пожежні',
    'підставки для гідранта пожежного',
    'шеврони',
    'технічні тканини',
    'суворі фільтрувальні тканини',
    'дощовики',
    'жилети',
    'збройові ремені',
    'комплекти уніформи',
    'куртки, парки',
    'маскувальний одяг',
    'набедрені платформи',
    'наколінники та налокітники',
    'окуляри',
    'панами',
    'підсумки',
    'плитоноски',
    'пончо',
    'ремені, підтяжки',
    'розвантажувальні системи',
    'рукавиці',
    'рюкзаки, сумки, баули',
    'светри, фліси',
    'сорочки, кітелі',
    'термобілизна',
    'футболки',
    'шарф-труби',
    'шкарпетки',
    'штани',
    'шорти',
  ];

  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    gender: '',
    article: '',
    popular: false,
  });

  useEffect(() => {
    if (mainData) {
      setArrayCarousel(mainData[0].carousel);
      setArrayNews(mainData[0].news);
      setArrayProduct(mainData[0].product);
    }
  }, [mainData]);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
    }
  };

  const handleInputChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    if (!editProduct) {
      if (type === 'checkbox') {
        setProduct((prevProduct) => ({ ...prevProduct, [name]: checked }));
      } else {
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
      }
    }
  };

  const handleUpload = (folderPath, array, product) => {
    if (selectedFiles.length > 0) {
      const uploadPromises = selectedFiles.map((file) => {
        return storage
          .ref(`${folderPath}/${file.name}`)
          .put(file)
          .then((snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
            );
            setProgress(progress);
            console.log(`Progress: ${progress}%`);
            return storage.ref(folderPath).child(file.name).getDownloadURL();
          });
      });

      Promise.all(uploadPromises)
        .then((urls) => {
          console.log('Image URLs:', urls);

          let update = {};
          if (product) {
            const updatedArray = array.map((item) => ({ ...item }));
            updatedArray.push({ ...product, img: urls });
            update = { [folderPath]: updatedArray };
          } else {
            update = { [folderPath]: [...array, ...urls] };
          }

          return firestore
            .collection('data')
            .doc('2cFIo4VuROPZuC8HbORe')
            .update(update)
            .then(() => {
              setProgress('Файлы добавлены');
              setSelectedFiles([]); // Сброс выбранных файлов
              setTimeout(() => {
                window.location.reload();
              }, 1000);
              console.log('URLs сохранены в Firestore');
            });
        })
        .catch((error) => {
          console.log('Ошибка сохранения URLs:', error);
          setProgress('Ошибка добавления файлов');
        });
    }
  };

  const handleUploadClick = () => {
    handleUpload('carousel', arrayCarousel);
    setProgressCarousel(true);
  };

  const handleUploadNewsClick = () => {
    handleUpload('news', arrayNews);
    setProgressNews(true);
  };

  const handleUploadProductsClick = () => {
    handleUpload('product', arrayProduct, product);
    setProgressProduct(true);
  };

  const handleDelete = (url, folderPath, array) => {
    const imageRefs = [];
    if (folderPath !== 'product') {
      // Удаляем все фотографии товара из хранилища
      imageRefs.push(storage.refFromURL(url).delete());
    } else {
      // Удаляем все фотографии товара из хранилища
      url.forEach((photoUrl) => {
        imageRefs.push(storage.refFromURL(photoUrl).delete());
      });
    }

    Promise.all(imageRefs)
      .then(() => {
        setProgress('Изображения удалены');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        console.log('Изображения удалены из хранилища');
      })
      .catch((error) => {
        console.log('Ошибка удаления изображений из хранилища:', error);
        setProgress('Ошибка удаления изображений');
      });

    let updatedArray = null;
    if (folderPath !== 'product') {
      updatedArray = array.filter((item) => item !== url);
    } else {
      updatedArray = array.filter((item) => item.img !== url);
    }

    // Удаляем товар из базы данных
    firestore
      .collection('data')
      .doc('2cFIo4VuROPZuC8HbORe')
      .update({
        [folderPath]: updatedArray,
      })
      .then(() => {
        console.log('Изображения удалены из массива в Firestore');
      })
      .catch((error) => {
        console.log('Ошибка удаления изображений из массива в Firestore:', error);
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
    if (selectedCategory === 'Всі товари' || item.category === selectedCategory) {
      return true;
    }
    return false;
  }).filter((item) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseArticle = item.article.toLowerCase();

    return (
      lowerCaseTitle.includes(lowerCaseSearchQuery) || lowerCaseArticle.includes(lowerCaseSearchQuery)
    );
  });

  const displayedProducts = showPopular
    ? filteredProducts.filter((item) => item.popular === true && item.category === selectedCategory)
    : filteredProducts;

  const handleEditInputChange = (e, editProduct) => {
    const {
      name,
      type,
      value,
      checked,
    } = e.target;
    if (type === 'checkbox') {
      setEditProduct({ ...editProduct, [name]: checked });
    } else {
      setEditProduct({ ...editProduct, [name]: value });
    }
  };

  const handleEditProduct = (editProduct) => {
    setProgressProduct(true);
    const filteredEditProduct = Object.entries(editProduct).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});

    const updatedArray = arrayProduct.map((item) => {
      if (item === editProductOrigin) {
        return {
          ...item,
          ...filteredEditProduct,
        };
      }
      return item;
    });

    firestore
      .collection('data')
      .doc('2cFIo4VuROPZuC8HbORe')
      .update({ 'product': updatedArray })
      .then(() => {
        setProgress('Товар оновлено');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        console.log('URL сохранен в Firestore');
      })
      .catch((error) => {
        console.log('Ошибка сохранения URL:', error);
        setProgress('Ошибка добавления файла');
      });
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <RequireAdminAuth>
      <div className="setting">
        <div className="setting-carusel container">
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
            <input className="setting-upload__input" type="file" onChange={handleFileChange} />
            <button onClick={handleUploadClick} className="setting-upload__button">Додати зображення</button>
          </div>
          {progressCarousel ? <div className="setting-carusel__progress">{progress}</div> : null}
        </div>

        <div className="setting-news">
          <div className="setting-news-container container">
            <p className="setting-carusel__title">Новини на головній сторінці.  Рекомендований розмір забражень для Новин та Акцій 250px * 300px</p>

            <div className="setting-carusel__box">
              {arrayNews.map((item, index) => (
                <div key={index} className="setting-carusel__item">
                  <div className='setting-carusel__item-picture'>
                    <img src={item} className="setting-carusel__item-image" alt="..." />
                  </div>

                  <button className="setting-carusel__item-delete" onClick={() => handleDelete(item, 'news', arrayNews, setProgressNews(true))}>Видалити</button>
                </div>
              ))}
            </div>

            <div className="setting-upload">
              <input className="setting-upload__input" type="file" onChange={handleFileChange} />
              <button onClick={handleUploadNewsClick} className="setting-upload__button">Додати зображення</button>
            </div>

            {progressNews ? <div className="setting-carusel__progress">{progress}</div> : null}

          </div>
        </div>

        <div className="setting-product container">
          <p className="setting-product__title">Управління товарами.  Рекомендований розмір забражень для товару 440px * 500px</p>
          {editProduct && <p className="setting-carusel__title">Редагування товару</p>}

          <div className="setting-product__inputs">
            {editProduct ? '' : <input type="file" onChange={handleFileChange} multiple />}

            {editProduct ? (
              <input
                className="setting-product__input"
                name="title"
                onChange={(e) => handleEditInputChange(e, editProduct)}
                value={editProduct.title}
                type="text"
                placeholder="Назва товару"
              />
            ) : (
              <input
                className="setting-product__input"
                name="title"
                onChange={handleInputChange}
                value={product.title}
                type="text"
                placeholder="Назва товару"
              />
            )}
            {editProduct ? (
              <input
                className="setting-product__input"
                name="price" onChange={(e) => handleEditInputChange(e, editProduct)}
                value={editProduct.price}
                type="number"
                placeholder="Ціна" />
            ) : (
              <input className="setting-product__input"
                name="price" onChange={handleInputChange}
                value={product.price} type="number"
                placeholder='Ціна' />
            )}
            {editProduct ? (
              <textarea
                className="setting-product__textarea"
                name="description" onChange={(e) => handleEditInputChange(e, editProduct)}
                value={editProduct.description}
                type="text"
                placeholder="Опис товару" />
            ) : (
              <textarea className="setting-product__textarea"
                name="description" onChange={handleInputChange}
                value={product.description}
                type="text"
                placeholder='Опис товару' />
            )}

            {editProduct ? (
              // <input
              //   className="setting-product__input"
              //   name="characteristic"
              //   onChange={(e) => handleEditInputChange(e, editProduct)}
              //   value={editProduct.characteristic}
              //   type="text"
              //   placeholder="характеристика товару" />
              <textarea
                className="setting-product__textarea"
                name="characteristic"
                onChange={(e) => handleEditInputChange(e, editProduct)}
                value={editProduct.characteristic}
                type="text"
                placeholder="Характеристика товару" />
            ) : (
              // <input
              //   className="setting-product__input"
              //   name="characteristic"
              //   onChange={handleInputChange}
              //   value={product.characteristic}
              //   type="text"
              //   placeholder='характеристика товару' />
              <textarea
                className="setting-product__textarea"
                name="characteristic"
                onChange={handleInputChange}
                value={product.characteristic}
                type="text"
                placeholder='характеристика товару' />
            )}

            {editProduct ? (
              <input
                className="setting-product__input"
                name="article"
                onChange={(e) => handleEditInputChange(e, editProduct)}
                value={editProduct.article}
                type="text"
                placeholder="Код товару" />
            ) : (
              <input
                className="setting-product__input"
                name="article"
                onChange={handleInputChange}
                value={product.article}
                type="text"
                placeholder='Код товару' />
            )}

            {editProduct ? (
              <select
                onChange={(e) => handleEditInputChange(e, editProduct)}
                name="category"
                value={editProduct.category}>
                <option>Обрати категорію</option>
                {categoryArray.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            ) : (
              <select
                onChange={handleInputChange}
                name="category"
                value={product.category}>
                <option>Обрати категорію</option>
                {categoryArray.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            )}

            {editProduct ? (
              <select
                onChange={(e) => handleEditInputChange(e, editProduct)}
                name="gender"
                value={editProduct.gender}>
                <option>Обрати пол</option>
                <option>Чоловічий</option>
                <option>Жіночий</option>
              </select>
            ) : (
              <select
                onChange={handleInputChange}
                name="gender"
                value={product.gender}>
                <option>Обрати пол</option>
                <option>Чоловічий</option>
                <option>Жіночий</option>
              </select>
            )}

            {editProduct ? (
              <label>
                <input
                  name="popular"
                  type="checkbox"
                  onChange={(e) => handleEditInputChange(e, editProduct)}
                  checked={editProduct.popular}
                  value={editProduct.popular} />
                Додати у популярні
              </label>
            ) : (
              <label>
                <input
                  name="popular"
                  type="checkbox"
                  onChange={handleInputChange}
                  value={product.popular} />
                Додати у популярні
              </label>
            )}

            {editProduct ? (
              <button
                className="setting-product__button"
                onClick={() => handleEditProduct(editProduct)}>Зберегти</button>
            ) : (
              <button
                onClick={handleUploadProductsClick}
                className="setting-product__button">Додати товар</button>
            )}
          </div>
          <div className="setting-carusel__box2">
            {progressProduct ? <div className="setting-carusel__progress">{progress}</div> : null}
          </div>
          <div className='setting-product__flex'>

            <p className="setting-product__flex-title">Товар</p>
            <select className='setting-product__select' onChange={handleChangeCategory}>
              <option>Всі товари</option>
              {categoryArray.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>

            <label className='setting-product__change'>
              <input name="popular" type="checkbox" onChange={handleChangeShowPopular} disabled={selectedCategory === 'Всі товари'} />
              Показати популярні
            </label>

            <input className='setting-product__search' value={searchQuery} onChange={handleSearchInputChange} type="text" name="search" placeholder='Пошук товара/артікля' />

          </div>
        </div>
        <div className="setting-product__box">

          {displayedProducts.map((item, index) => (
            <div key={index} className="setting-product__box-items">
              <div className="setting-product__box-item">
                <div className='setting-product__box-item__picture'>
                  <img className='setting-product__box-item__img' src={item.img[0]} alt={item.img[0]} />
                </div>
                <div className='setting-product__box-item-info'>
                  <div className='setting-product__box-item-info__title'>{item.title}</div>
                  <div className='setting-product__box-item-info__price'>{item.price} UAH</div>
                  <div className='setting-product__box-item-info__description'>{item.description}</div>
                  <div className='setting-product__box-item-info__description'>{item.category}</div>
                  <div className='setting-product__box-item-info__description'>{item.gender}</div>
                  <div className='setting-product__box-item-info__article'>{item.article}</div>
                  <div className='setting-product__box-item-info__popular'>Популярні: {item.popular ? 'Так' : 'Ні'}</div>
                </div>
              </div>
              <button className="setting-carusel__item-edit" onClick={() => setEditProduct(item, setEditProductOrigin(item))}>Редагувати</button>
              <button className="setting-carusel__item-delete" onClick={() => handleDelete(item.img, 'product', arrayProduct, setProgressProduct(true))}>Видалити</button>
            </div>
          ))}
        </div>
      </div>
    </RequireAdminAuth>
  );
}

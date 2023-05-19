import React, { useState } from 'react';
import { storage } from '../../../firebase'; // Импортируйте модуль storage из вашего файла firebase
import './Test.css';

export default function Test() {
  const [image, setImage] = useState(null);

  // Обработчик выбора файла
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // Обработчик отправки файла в хранилище
  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Обработчик прогресса загрузки
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(`Progress: ${progress}%`);
        },
        (error) => {
          // Обработчик ошибок загрузки
          console.log(error);
        },
        () => {
          // Обработчик успешной загрузки
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log('Image URL:', url);
            });
        }
      );
    }
  };

  return (
    <div className='test-position'>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

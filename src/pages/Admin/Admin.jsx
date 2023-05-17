import React from 'react';
import { auth } from '../../firebase';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputText } from '../../components/Forms/InputText';
import { adminRules } from '../../constans/rules';
import './Admin.css';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const { control, handleSubmit, getValues } = useForm();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const { login, password } = getValues();
      await auth.signInWithEmailAndPassword(login, password);
      navigate('/admin/admin-test');
    } catch (error) {
      console.error('Ошибка аутентификации:', error);
    }
  };


  return (
    <div className='admin'>
      <div className='form-wrapper'>
        <InputText
          control={control}
          name='login'
          label='Логін'
          type='text'
          rules={adminRules.login}
        />
        <InputText
          control={control}
          name='password'
          label='Пароль'
          type='password'
          rules={adminRules.password}
        />
        <Button
          sx={{ color: '#F07C00' }}
          size='large'
          onClick={handleSubmit(onSubmit)}
        >Війти
        </Button>
      </div>
    </div>
  );
}



// import React, { useState, useEffect } from 'react';
// import { auth, firestore } from '../../firebase'; // Импортируйте экземпляр базы данных Firebase из вашего файла firebase.js
// import { Button } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import { InputText } from '../../components/Forms/InputText';
// import { adminRules } from '../../constans/rules';
// import './Admin.css';

// export default function Admin() {
//   const [data, setData] = useState(null);

//   const { control, handleSubmit, getValues } = useForm();

//   const onSubmit = async () => {
//     try {
//       const { login, password } = getValues();
//       await auth.signInWithEmailAndPassword(login, password);
//     } catch (error) {
//       console.error('Ошибка аутентификации:', error);
//     }
//   }


//   useEffect(() => {
//     // Обработчик для получения данных из базы данных Firebase
//     const fetchData = async () => {
//       try {
//         // Получаем ссылку на коллекцию в базе данных
//         const collectionRef = firestore.collection('test'); // Здесь вы можете указать имя вашей коллекции

//         // Запрашиваем данные
//         const snapshot = await collectionRef.get();
//         // Преобразуем данные в массив объектов
//         const dataArr = snapshot.docs.map((doc) => doc.data());

//         // Обновляем состояние с полученными данными
//         setData(dataArr);
//       } catch (error) {
//         console.error('Ошибка получения данных:', error);
//       }
//     };

//     // Выполняем получение данных после успешной аутентификации
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         fetchData();
//       }
//     });

//     // Отписываемся от обработчика при размонтировании компонента
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div className='admin'>
//       {/* Ваш код для отображения данных */}
//       {data && (
//         <div>
//           <h2>Данные</h2>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}

//       <div className='admin'>
//         <div className='form-wrapper'>
//           <InputText
//             control={control}
//             name='login'
//             label='Логін'
//             type='text'
//             rules={adminRules.login}
//           />
//           <InputText
//             control={control}
//             name='password'
//             label='Пароль'
//             type='password'
//             rules={adminRules.password}
//           />
//           <Button
//             sx={{ color: '#F07C00' }}
//             size='large'
//             onClick={handleSubmit(onSubmit)}
//           >Війти
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }


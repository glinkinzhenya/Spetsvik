import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoute from './pages/MainRoute';
import { Context } from './Contex';
import { firestore } from './firebase';

export default function App() {
  let test1 = '';
  const [data2, setData] = useState(null);


  useEffect(() => {
    firestore.collection("test").get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());

        });
        // Обработка полученных данных
        setData(data);
        console.log(data);

      })
      .catch((error) => {
        // Обработка ошибок
        console.log("Ошибка получения данных из Firestore:", error);
        throw error;
      });
  }, []);
  test1 = data2;


  return (
    <Context.Provider value={{ test1 }}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<MainRoute />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoute from './pages/MainRoute';
import { Context } from './Contex';
import { firestore } from './firebase';

export default function App() {
  const [data2, setData] = useState(null);

  useEffect(() => {
    firestore.collection("data").get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        setData(data);
      })
      .catch((error) => {
        // Обработка ошибок
        console.log("Ошибка получения данных из Firestore:", error);
        throw error;
      });
  }, []);
  const mainData = data2;

  return (
    <Context.Provider value={{ mainData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<MainRoute />} />
          </Routes>
        </BrowserRouter>
    </Context.Provider>
  );
}

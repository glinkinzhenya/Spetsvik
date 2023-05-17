import { firestore } from './../../firebase';

// Получение данных из Firestore
export default function getDataFromFirestore() {
  return firestore.collection("test").get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      // Обработка полученных данных
      console.log(data);
      return data;
    })
    .catch((error) => {
      // Обработка ошибок
      console.log("Ошибка получения данных из Firestore:", error);
      throw error;
    });
}

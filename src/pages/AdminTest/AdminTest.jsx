import React, { useEffect } from 'react';
import axios from 'axios';
import './AdminTest.css';

export default function AdminTest() {

  const SimpleRequest = () => {
    useEffect(() => {
      console.log(555);
      const fetchData = async () => {
        try {
          const response = await axios.get('https://spetsvik1-deepdive-default-rtdb.europe-west1.firebasedatabase.app/');
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);
  }
  SimpleRequest();

  return (
    <div>
      <h1 className='admin-test'>Simple Request Example</h1>
    </div>
  );
};


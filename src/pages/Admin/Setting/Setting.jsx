import React from 'react';
import RequireAdminAuth from '../RequireAdminAuth';
import './Setting.css';

export default function AdminTest() {

  return (

    <RequireAdminAuth>
      <div>
        <h1 className='admin-test'>Simple Request Example</h1>
      </div>
    </RequireAdminAuth>

  );
};


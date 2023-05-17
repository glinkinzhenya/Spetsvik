import React from 'react';
import RequireAdminAuth from '../RequireAdminAuth';
import './Setting.css';

export default function Setting() {

  return (

    <RequireAdminAuth>
      <div className='admin-test'>
        <h1 >Simple Request Example</h1>
      </div>
    </RequireAdminAuth>

  );
};


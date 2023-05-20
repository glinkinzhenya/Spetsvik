import { Button } from '@mui/material';
import React from 'react';

const DeleteAdmin = () => {
    const handleDelete = () => {
        localStorage.removeItem('auth');
        // Дополнительные действия после удаления
        // Например, перенаправление на страницу авторизации
        // window.location.href = '/login';
        window.location.reload();
    };

    const handleSetting = () => {
        // Дополнительные действия после удаления
        // Например, перенаправление на страницу авторизации
        window.location.href = '/setting';
    };

    return (
        <>
      <Button
            sx={{
                position: 'fixed',
                zIndex: '100',
                right: '20px',
                bottom: '80px',
                backgroundColor: 'black',
                fontSize: '20px',
                color: '#F07C00',
                '&:hover': {
                    backgroundColor: '#2c2a28', // Изменение цвета при наведении на кнопку
                },
            }}
            onClick={handleSetting}
        >
            До кабінету
        </Button>
        <Button
            sx={{
                position: 'fixed',
                zIndex: '100',
                right: '20px',
                bottom: '20px',
                backgroundColor: 'black',
                fontSize: '20px',
                color: '#F07C00',
                '&:hover': {
                    backgroundColor: '#2c2a28', // Изменение цвета при наведении на кнопку
                },
            }}
            onClick={handleDelete}
        >
            Вийти з Адміністратора
            </Button>
        </>
    );
};

export default DeleteAdmin;

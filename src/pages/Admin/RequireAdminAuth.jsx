import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const RequireAdminAuth = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAdminAuth = async () => {
            try {
                // Проверяем текущего пользователя
                const user = auth.currentUser;
                if (!user) {
                    // Если пользователь не аутентифицирован, перенаправляем на страницу входа
                    navigate('/admin');
                }
                // Здесь вы также можете добавить дополнительные проверки для уровня доступа администратора, если необходимо
            } catch (error) {
                console.error('Ошибка проверки аутентификации:', error);
            }
        };

        checkAdminAuth();
    }, [navigate]);

    return <>{children}</>;
};

export default RequireAdminAuth;

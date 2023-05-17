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

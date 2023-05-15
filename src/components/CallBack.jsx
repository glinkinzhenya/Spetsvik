import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function CallBack(props) {
  const { buttonText, dialogTitle, dialogText, confirmText, cancelText, fontSize } = props;
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    // Здесь можно выполнить отправку данных на сервер
    // используя phoneNumber или другие данные формы
    // Например, можно использовать fetch или axios для отправки POST-запроса
    // Ниже приведен пример использования fetch:

    fetch('https://formspree.io/f/mbjebaod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
    })
      .then(response => {
        // Обработка ответа от сервера
        if (response.ok) {
          // Действия при успешной отправке данных
          console.log('Данные успешно отправлены');
        } else {
          // Действия при ошибке отправки данных
          console.log('Ошибка отправки данных');
        }
        handleClose();
      })
      .catch(error => {
        console.log('Ошибка отправки данных:', error);
        handleClose();
      });
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className='callBack'>
      <Button sx={{ width: '100%', color: '#F07C00', borderColor: '#F07C00', ':hover': { borderColor: 'white' } }} variant="outlined" onClick={handleClickOpen}>
        <Typography sx={{ fontSize }} color="white"> {buttonText}</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogText}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="+380"
            type="number"
            fullWidth
            variant="standard"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: 'black' }} onClick={handleClose}>{cancelText}</Button>
          <Button sx={{ color: '#F07C00' }} onClick={handleConfirm}>{confirmText}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



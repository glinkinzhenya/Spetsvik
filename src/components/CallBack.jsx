import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Typography } from '@mui/material';

export default function CallBack(props) {
  const { buttonText, dialogTitle, dialogText, confirmText, cancelText, fontSize } = props;
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formName, setformName] = useState('');
  const [formText, setformText] = useState('');
  const [successOpen, setSuccessOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccessClose = () => {
    setSuccessOpen(false);
  };

  const handleConfirm = () => {
    fetch('https://formspree.io/f/mbjebaod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formName, phoneNumber, formText }),
    })
      .then(response => {
        if (response.ok) {
          setSuccessOpen(true);
        } else {
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

  const handleformNameChange = (event) => {
    setformName(event.target.value)
  };

  const handleformTextChange = (event) => {
    setformText(event.target.value)
  };

  return (
    <div className='callBack'>
      <Button sx={{ width: '100%', color: '#F07C00', borderColor: '#F07C00', ':hover': { borderColor: 'white' } }} variant="outlined" onClick={handleClickOpen}>
        <Typography sx={{ fontSize }} color="white">{buttonText}</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogText}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="nam"
            label="Ім'я"
            type="text"
            fullWidth
            variant="standard"
            value={formName}
            onChange={handleformNameChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Номер"
            type="number"
            fullWidth
            variant="standard"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="nam"
            label="Коментар"
            type="text"
            fullWidth
            variant="standard"
            value={formText}
            onChange={handleformTextChange}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: 'black' }} onClick={handleClose}>{cancelText}</Button>
          <Button sx={{ color: '#F07C00' }} onClick={handleConfirm}>{confirmText}</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        sx={{ BackgroundColor: 'black' }}
        open={successOpen}
        autoHideDuration={4000}
        onClose={handleSuccessClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <MuiAlert sx={{ сolor: 'black' }} elevation={6} variant="filled" onClose={handleSuccessClose} severity="success">
          Ми отримали повідомлення, скоро з Вами зв'яжемось.
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

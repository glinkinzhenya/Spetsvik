import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

// export default function CallBack( text ) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='callBack'>
//       <Button sx={{
//         width: '100%', color: '#F07C00', borderColor: '#F07C00', ':hover': { borderColor: 'white'} }} variant="outlined" onClick={handleClickOpen}>
//         <Typography sx={{ fontSize: '100%' }} color="white">Ми Вам зателефонуємо</Typography>
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Введіть Ваш номер телефону</DialogTitle>
//         <DialogContent>
//           <DialogContentText >
//             Ми зателефонуємо як найшвідше та відповемо на всі ваші питання
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="+380"
//             type="number"
//             fullWidth
//             variant="standard"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button sx={{ color: 'black' }} onClick={handleClose}>Відмінити</Button>
//           <Button sx={{ color: '#F07C00' }} onClick={handleClose}>Підтвердити</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }


export default function CallBack(props) {
  const { buttonText, dialogTitle, dialogText, confirmText, cancelText, fontSize } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='callBack'>
      <Button sx={{ width: '100%', color: '#F07C00', borderColor: '#F07C00', ':hover': { borderColor: 'white' } }} variant="outlined" onClick={handleClickOpen}>
        <Typography sx={{ fontSize }} color="white"> {buttonText}</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText >
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
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: 'black' }} onClick={handleClose}>{cancelText}</Button>
          <Button sx={{ color: '#F07C00' }} onClick={handleClose}>{confirmText}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


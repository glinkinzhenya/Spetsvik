import React, { useState } from 'react';
import {
  Button,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Burger() {
  const [open, setOpen] = useState(false);
  const pages = ['Головна', 'Про нас', 'Товари', 'Послуги', 'Новини та акції', 'Контакти'];
  const links = ['/', '/trainings', '/trainers'];

  return (
    <nav>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          color: '#e28130',
          width: '50px',
          height: '50px',
          '& svg': {
            fontSize: '42px', // измените размер SVG-изображения на свое усмотрение
          },
        }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
          sx={{
            height: '100%',
            backgroundColor: 'var(--secondary)',
            
            color: 'var(--secondary-alt)',
          }}
        >
          <List>
            {pages.map((page, index) => (
              <Link key={page} to={links[index]} >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={page}/>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
}

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
  const links = ['/', '/about', '/trainers'];

  return (
    <nav>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          color: '#e28130',
          width: '50px',
          height: '50px',
          '& svg': {
            fontSize: '42px',
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
            width: '220px',
            backgroundColor: 'rgb(60, 60, 58);',
          }}
        >
          <List>
            {pages.map((page, index) => (
              <Link key={page} to={links[index]} style={{ textDecoration: 'none', color: 'white' }}>
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

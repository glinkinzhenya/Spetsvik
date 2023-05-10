import React from 'react';
import { Box, Grid, styled } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './GridContainer.css';


const FooterWrapper = styled(Box)(() => ({
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  borderRadius: '20px',
  justifyContent: 'space-between',
  padding: '0px 20px',
  backdropFilter: 'blur(5px)',
  background: 'rgba(0, 0, 0, 0.404)',
}));

export default function GridContainer({ children }) {
  return (
    <div className='GridTemplate'>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {children}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Grid>
      </Grid>
    </div>
  );
}

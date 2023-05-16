import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Grid from './GridContainer/GridContainer';
import Main from './Main/Main';
import News from './Main/News/News';
import About from './Main/About/About';
import Services from './Main/Services/Services';
import Products from './Main/Products/Products';
import FireSafety from './Main/Products/FireSafety/FireSafety';
import SpetsCloth from './Main/Products/SpetsCloth/SpetsCloth';
import IndividualProtection from './Main/Products/IndividualProtection/IndividualProtection';
import Fabrics from './Main/Products/Fabrics/Fabrics';
// import Trainings from './Trainings/Trainings';
// import SportPage from './SportPage/SportPage';
// import Trainers from './Trainers/Trainers';
import Admin from './Admin/Admin';
import Shoes from './Main/Products/Shoes/Shoes';
import Shevrons from './Main/Products/Shevrons/Shevrons';
// import FireExtinguishers from './Main/Products/FireSafety/FireExtinguishers/FireExtinguishers';
// import AddForm from './AddForm/AddForm';
// import NotFound from './NotFound/NotFound';
// import Start from './Start/Start';

export default function MainRoute() {
  return (
    <Grid>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/spets-cloth' element={<SpetsCloth />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/individual-protection' element={<IndividualProtection />} />
        <Route path='/fire-safety' element={<FireSafety />} />
        {/* <Route path='/fire-extinguishers' element={<FireExtinguishers />} /> */}
        <Route path='/fabrics' element={<Fabrics />} />
        <Route path='/shevrons' element={<Shevrons />} />
        <Route path='/services' element={<Services />} />
        <Route path='/news' element={<News />} />
        {/* /edit фиксированный элемент */}
        {/* <Route path='/trainings' element={<Trainings />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/4hg874hg8h45g85hg848g47gh4hyth4ythvy4thg8yh5g784h578heyubvyurbvubs' element={<AddForm />} />
        {/* /:name плавающий элемент */}
        {/* <Route path='/trainings/:name' element={<SportPage />} />
        <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </Grid>
  );
}

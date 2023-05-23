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
import Admin from './Admin/Admin';
import Setting from './Admin/Setting/Setting';
import Shoes from './Main/Products/Shoes/Shoes';
import Shevrons from './Main/Products/Shevrons/Shevrons';
import FireExtinguishers from './Main/Products/FireSafety/FireExtinguishers/FireExtinguishers';
import Test from './Main/test/Test';
import WorkRobes from './Main/Products/WorkRobes/WorkRobes';
import FireCabinets from './Main/Products/FireSafety/FireCabinets/FireCabinets';

export default function MainRoute() {
  return (
    <Grid>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/spets-cloth' element={<SpetsCloth />} />
        <Route path='/work-robes' element={<WorkRobes />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/individual-protection' element={<IndividualProtection />} />
        <Route path='/fire-safety' element={<FireSafety />} />
        <Route path='/fire-extinguishers' element={<FireExtinguishers />} />
        <Route path='/fire-cabinets' element={<FireCabinets />} />
        <Route path='/fabrics' element={<Fabrics />} />
        <Route path='/shevrons' element={<Shevrons />} />
        <Route path='/services' element={<Services />} />
        <Route path='/news' element={<News />} />
        <Route path='/test' element={<Test />} />
        {/* <Route path='/admin/admin-test' element={<AdminTest />} /> */}
        {/* // /edit фиксированный элемент */}
        {/* <Route path='/trainings' element={<Trainings />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path='/admin' element={<Admin />} /> */}
        {/* /:name плавающий элемент */}
        {/* <Route path='/trainings/:name' element={<SportPage />} />
        <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </Grid>
  );
}

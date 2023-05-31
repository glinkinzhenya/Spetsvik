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
import WorkRobes from './Main/Products/SpetsCloth/SpetsClothProducts/WorkRobes/WorkRobes';
import FireCabinets from './Main/Products/FireSafety/FireCabinets/FireCabinets';
import FireHoses from './Main/Products/FireSafety/FireHoses/FireHoses';
import MilitaryEquipment from './Main/Products/MilitaryEquipment/MilitaryEquipment';
import MedicalClothes from './Main/Products/SpetsCloth/SpetsClothProducts/MedicalClothes/MedicalClothes';
import InsulatedOveralls from './Main/Products/SpetsCloth/SpetsClothProducts/InsulatedOveralls/InsulatedOveralls';
import WorkSuits from './Main/Products/SpetsCloth/SpetsClothProducts/WorkSuits/WorkSuits';
import ProtectiveOveralls from './Main/Products/SpetsCloth/SpetsClothProducts/ProtectiveOveralls/ProtectiveOveralls';
import WorkAprons from './Main/Products/SpetsCloth/SpetsClothProducts/WorkAprons/WorkAprons';
import Hats from './Main/Products/SpetsCloth/SpetsClothProducts/Hats/Hats';
import HandProtectionEquipment from './Main/Products/IndividualProtection/IndividualProducts/HandProtectionEquipment/HandProtectionEquipment';
import EyeProtection from './Main/Products/IndividualProtection/IndividualProducts/EyeProtection/EyeProtection';
import RespiratoryProtection from './Main/Products/IndividualProtection/IndividualProducts/RespiratoryProtection/RespiratoryProtection';
import SignalingProducts from './Main/Products/IndividualProtection/IndividualProducts/SignalingProducts/SignalingProducts';
import SpecialShoes from './Main/Products/Shoes/ShoesProducts/SpecialShoes/SpecialShoes';
import MilitaryFootwear from './Main/Products/Shoes/ShoesProducts/MilitaryFootwear/MilitaryFootwear';

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
        <Route path='/medical-clothes' element={<MedicalClothes />} />
        <Route path='/insulated-overalls' element={<InsulatedOveralls />} />
        <Route path='/work-suits' element={<WorkSuits />} />
        <Route path='/protective-overalls' element={<ProtectiveOveralls />} />
        <Route path='/work-aprons' element={<WorkAprons />} />
        <Route path='/hats' element={<Hats />} />

        <Route path='/individual-protection' element={<IndividualProtection />} />
        <Route path='/hand-protection-equipment' element={<HandProtectionEquipment />} />
        <Route path='/eye-protection' element={<EyeProtection />} />
        <Route path='/respiratory-protection' element={<RespiratoryProtection />} />
        <Route path='/signaling-products' element={<SignalingProducts />} />


        <Route path='/shoes' element={<Shoes />} />
        <Route path='/special-shoes' element={<SpecialShoes />} />
        <Route path='/military-footwear' element={<MilitaryFootwear />} />





        <Route path='/fire-safety' element={<FireSafety />} />
        <Route path='/fire-extinguishers' element={<FireExtinguishers />} />
        <Route path='/fire-cabinets' element={<FireCabinets />} />
        <Route path='/fire-hoses' element={<FireHoses />} />

        <Route path='/military-equipment' element={<MilitaryEquipment />} />


        <Route path='/shevrons' element={<Shevrons />} />
        <Route path='/fabrics' element={<Fabrics />} />
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

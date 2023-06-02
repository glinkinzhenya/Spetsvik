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
import PowderFireExtinguishers from './Main/Products/FireSafety/FireExtinguishers/FireExtinguishersProducts/PowderFireExtinguishers/PowderFireExtinguishers';
import AcidFireExtinguishers from './Main/Products/FireSafety/FireExtinguishers/FireExtinguishersProducts/AcidFireExtinguishers/AcidFireExtinguishers';
import StandsAndFasteners from './Main/Products/FireSafety/FireExtinguishers/FireExtinguishersProducts/StandsAndFasteners/StandsAndFasteners';
import ComponentsForFireExtinguishers from './Main/Products/FireSafety/FireExtinguishers/FireExtinguishersProducts/ComponentsForFireExtinguishers/ComponentsForFireExtinguishers';
import FireCabinetsItem from './Main/Products/FireSafety/FireCabinets/FireCabinetsProducts/FireCabinetsItem/FireCabinetsItem';
import FireShieldsAndStands from './Main/Products/FireSafety/FireCabinets/FireCabinetsProducts/FireShieldsAndStands/FireShieldsAndStands';
import FireEquipment from './Main/Products/FireSafety/FireCabinets/FireCabinetsProducts/FireEquipment/FireEquipment';
import FireBoxes from './Main/Products/FireSafety/FireCabinets/FireCabinetsProducts/FireBoxes/FireBoxes';
import ShevronsItem from './Main/Products/Shevrons/ShevronsProducts/ShevronsItem/ShevronsItem';
import TechnicalFabrics from './Main/Products/Fabrics/FabricsProducts/TechnicalFabrics/TechnicalFabrics';
import StrictFilterFabrics from './Main/Products/Fabrics/FabricsProducts/StrictFilterFabrics/StrictFilterFabrics';
import Raincoats from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/Raincoats/Raincoats';
import Vests from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/Vests/Vests';
import WeaponBelts from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/WeaponBelts/WeaponBelts';
import SetsOfUniforms from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/SetsOfUniforms/SetsOfUniforms';
import JacketsParks from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/JacketsParks/JacketsParks';
import CamouflageClothing from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/CamouflageClothing/CamouflageClothing';
import ThighPlatforms from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/ThighPlatforms/ThighPlatforms';
import KneePadsAndElbowPads from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/KneePadsAndElbowPads/KneePadsAndElbowPads';
import Glasses from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/Glasses/Glasses';
import Panami from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/Panami/Panami';
import Pouches from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/Pouches/Pouches';
import PlateCarriers from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/PlateCarriers/PlateCarriers';
import Poncho from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/Poncho/Poncho';
import BeltsBraces from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/BeltsBraces/BeltsBraces';
import UnloadingSystems from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/UnloadingSystems/UnloadingSystems';
import Gloves from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/Gloves/Gloves';
import BackpacksBagsTrunks from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/BackpacksBagsTrunks/BackpacksBagsTrunks';
import SweatersFleeces from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/SweatersFleeces/SweatersFleeces';
import ShirtsCoats from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/ShirtsCoats/ShirtsCoats';
import ThermalUnderwear from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/ThermalUnderwear/ThermalUnderwear';
import Shirts from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/Shirts/Shirts';
import ScarfPipes from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/ScarfPipes/ScarfPipes';
import Socks from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/Socks/Socks';
import Shorts from './Main/Products/MilitaryEquipment/MilitaryEquipmentProducts/Shorts/Shorts';
import PressureHoses from './Main/Products/FireSafety/FireHoses/FireHosesProducts/PressureHoses/PressureHoses';
import FireBarrels from './Main/Products/FireSafety/FireHoses/FireHosesProducts/FireBarrels/FireBarrels';
import FireConnectingHeads from './Main/Products/FireSafety/FireHoses/FireHosesProducts/FireConnectingHeads/FireConnectingHeads';
import FireHydrants from './Main/Products/FireSafety/FireHoses/FireHosesProducts/FireHydrants/FireHydrants';
import FireColumns from './Main/Products/FireSafety/FireHoses/FireHosesProducts/FireColumns/FireColumns';
import StandsForHydrants from './Main/Products/FireSafety/FireHoses/FireHosesProducts/StandsForHydrants/StandsForHydrants';

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
        <Route path='/powder-fire-extinguishers' element={<PowderFireExtinguishers />} />

        <Route path='/acid-fire-extinguishers' element={<AcidFireExtinguishers />} />
        <Route path='/stands-and-fasteners' element={<StandsAndFasteners />} />
        <Route path='/components-for-fire-extinguishers' element={<ComponentsForFireExtinguishers />} />

        <Route path='/fire-cabinets' element={<FireCabinets />} />
        <Route path='/fire-cabinets-item' element={<FireCabinetsItem />} />
        <Route path='/fire-shields-and-stands' element={<FireShieldsAndStands />} />
        <Route path='/fire-equipment' element={<FireEquipment />} />
        <Route path='/fire-boxes' element={<FireBoxes />} />


        <Route path='/fire-hoses' element={<FireHoses />} />
        <Route path='/pressure-hoses' element={<PressureHoses />} />
        <Route path='/fire-barrels' element={<FireBarrels />} />
        <Route path='/fire-connecting-heads' element={<FireConnectingHeads />} />
        <Route path='/fire-hydrants' element={<FireHydrants />} />
        <Route path='/fire-columns' element={<FireColumns />} />
        <Route path='/stands-for-hydrants' element={<StandsForHydrants />} />

        <Route path='/military-equipment' element={<MilitaryEquipment />} />
        <Route path='/raincoats' element={<Raincoats />} />
        <Route path='/vests' element={<Vests />} />
        <Route path='/weapon-belts' element={<WeaponBelts />} />
        <Route path='/sets-of-uniforms' element={<SetsOfUniforms />} />
        <Route path='/jackets-parks' element={<JacketsParks />} />
        <Route path='/camouflage-clothing' element={<CamouflageClothing />} />
        <Route path='/thigh-platforms' element={<ThighPlatforms />} />
        <Route path='/knee-pads-and-elbow-pads' element={<KneePadsAndElbowPads />} />
        <Route path='/glasses' element={<Glasses />} />
        <Route path='/panami' element={<Panami />} />
        <Route path='/pouches' element={<Pouches />} />
        <Route path='/plate-carriers' element={<PlateCarriers />} />
        <Route path='/poncho' element={<Poncho />} />
        <Route path='/belts-braces' element={<BeltsBraces />} />
        <Route path='/unloading-systems' element={<UnloadingSystems />} />
        <Route path='/gloves' element={<Gloves />} />
        <Route path='/backpacks-bags-trunks' element={<BackpacksBagsTrunks />} />
        <Route path='/sweaters-fleeces' element={<SweatersFleeces />} />
        <Route path='/shirts-coats' element={<ShirtsCoats />} />
        <Route path='/thermal-underwear' element={<ThermalUnderwear />} />
        <Route path='/shirts' element={<Shirts />} />
        <Route path='/scarf-pipes' element={<ScarfPipes />} />
        <Route path='/socks' element={<Socks />} />
        <Route path='/shorts' element={<Shorts />} />


        <Route path='/shevrons' element={<Shevrons />} />
        <Route path='/shevrons-item' element={<ShevronsItem />} />

        <Route path='/fabrics' element={<Fabrics />} />
        <Route path='/technical-fabrics' element={<TechnicalFabrics />} />
        <Route path='/strict-filter-fabrics' element={<StrictFilterFabrics />} />

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

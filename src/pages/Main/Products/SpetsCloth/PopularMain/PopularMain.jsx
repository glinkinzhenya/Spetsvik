// import React from 'react';
// import './PopularMain.css';

// export default function PopularMain() {

//   return (
//     <div className='popularGoods'>
//       <div className='popularGoods-container container'>
//         <h3 className='popularGoods-secondaryTitle'>Популярні товари</h3>

//         <div className='popularGoods-box'>

//           <div className='popularGoods-box__item'>
//             <div className='popularGoods-box__item-picture'>
//               <img className='popularGoods-box__item-image' src="./img/stock_medical.jpeg" alt="" />
//             </div>
//             <div className='popularGoods-box__item-bg'>
//               <div className='popularGoods-box__item-name'>ХАЛАТ "ХАЛАТ"</div>
//               <div className='popularGoods-box__item-price'>1099 грн</div>
//             </div>
//           </div>

//           <div className='popularGoods-box__item'>
//             <div className='popularGoods-box__item-picture'>
//               <img className='popularGoods-box__item-image' src="./img/stock_spets.jpg" alt="" />
//             </div>
//             <div className='popularGoods-box__item-bg'>
//               <div className='popularGoods-box__item-name'>ОДЯГ "ОДЯГ"</div>
//               <div className='popularGoods-box__item-price'>1099 грн</div>
//             </div>
//           </div>

//           <div className='popularGoods-box__item'>
//             <div className='popularGoods-box__item-picture'>
//               <img className='popularGoods-box__item-image' src="./img/stock_optimistic.jpeg" alt="" />
//             </div>
//             <div className='popularGoods-box__item-bg'>
//               <div className='popularGoods-box__item-name'>ФАРТУХ "ФАРТУХ"</div>
//               <div className='popularGoods-box__item-price'>1099 грн</div>
//             </div>
//           </div>

//           <div className='popularGoods-box__item'>
//             <div className='popularGoods-box__item-picture'>
//               <img className='popularGoods-box__item-image' src="./img/stock_worker.jpeg" alt="" />
//             </div>
//             <div className='popularGoods-box__item-bg'>
//               <div className='popularGoods-box__item-name'>КОСТЮМ "КОСТЮМ"</div>
//               <div className='popularGoods-box__item-price'>1099 грн</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useContext, useEffect, useState } from 'react';
// import { Context } from '../Contex';
import { Context } from '../../../../../Contex';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PopularMain.css';
import { Alert, Button, Snackbar } from '@mui/material';
import ProductsMap from '../../../../../components/ProductsMap';

export default function PopularMain() {

  return (

    <>
      <div className='popularMain'>
        <div className='popularMain-container container'>
          <h3 className='popularMain-secondaryTitle'>Популярні товари</h3>
        </div>




        <div className='productsMap container'>
          <div className='popularMain-box'>
          <ProductsMap category='халати робочі' popular={true} />


          </div>
        </div>
      </div>
    </>
  );
}

import React, { useContext, useEffect, useState } from 'react';
// import React, { useContext } from 'react';
import { Context } from '../Contex';

import './ProductsMap.css';

export default function ProductsMap(category) {
    console.log(category);
    const [arrayProduct, setArrayProduct] = useState([]);
    const { mainData } = useContext(Context);
    const array = [];
    useEffect(() => {
        if (mainData) {
            setArrayProduct(mainData[0].product);
            mainData[0].product.forEach((item, index) => {
                if (item.category === category) {
                    // array.push(item);
                    console.log('huy');
                }
            });
        }
    }, [mainData]);


    return (
        <div className='productsMap-box'>
            {array.map((item, index) => (

                <div className='productsMap-box-item'>
                    <div className='productsMap-box__picture'>
                        <img className='productsMap-box__image' src={item.img[0]} alt="" />
                    </div>
                    <div className='productsMap-title'>{item.title}</div>
                    <div className='productsMap-box__price'>{item.price} грн</div>
                </div>

            ))}
        </div>
    );
}
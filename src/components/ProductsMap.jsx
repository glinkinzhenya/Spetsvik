import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Contex';
import './ProductsMap.css';

export default function ProductsMap({ category }) {
    const [arrayProduct, setArrayProduct] = useState([]);
    const { mainData } = useContext(Context);

    useEffect(() => {
        if (mainData) {
            const filteredProducts = mainData[0].product.filter(
                (item) => item.category === category
            );
            setArrayProduct(filteredProducts);
        }
    }, [mainData, category]);
    console.log(arrayProduct);
    return (
        <div className='productsMap-box'>
            {arrayProduct.map((item, index) => (
                <div className='productsMap-box-item' key={index}>
                    <div className='productsMap-box__picture'>
                        <img className='productsMap-box__image' src={item.img[0]} alt='' />
                    </div>
                    <div className='productsMap-title'>{item.title}</div>
                    <div className='productsMap-box__price'>{item.price} грн</div>
                </div>
            ))}
        </div>
    );
}

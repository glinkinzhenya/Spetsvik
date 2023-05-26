import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Contex';
import './ProductsMap.css';

export default function ProductsMap({ category, popular }) {
    const [arrayProduct, setArrayProduct] = useState([]);
    const { mainData } = useContext(Context);

    useEffect(() => {
        if (mainData) {
            let filteredProducts = mainData[0].product.filter(
                (item) => item.category === category
            );

            if (popular) {
                filteredProducts = filteredProducts.filter(
                    (item) => item.popular
                );
            }

            setArrayProduct(filteredProducts);
        }
    }, [mainData, category, popular]);

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

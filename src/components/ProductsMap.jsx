import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Contex';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductsMap.css';

export default function ProductsMap({ category, popular }) {
    const [arrayProduct, setArrayProduct] = useState([]);
    const { mainData } = useContext(Context);

    useEffect(() => {
        if (mainData) {
            let filteredProducts = mainData[0].product.filter(
                (item) => item.category === category
            );
            if (popular === true) {
                filteredProducts = filteredProducts.filter(
                    (item) => item.popular
                );
            }

            setArrayProduct(filteredProducts);
        }
    }, [mainData, category, popular]);



    const [productWindow, setProductWindow] = useState(false);
    const [product, setProduct] = useState([]);

    const touchProduct = (item) => {

        setProduct(item)
        setProductWindow(true)
    };
    const touchProductClose = () => {
        setProductWindow(false)
    };



    return (
        <div className='productsMap'>
            <div className='productsMap-box'>
                {arrayProduct.map((item, index) => (
                    <div onClick={() => touchProduct(item)} className='productsMap-box-item' key={index}>
                        <div className='productsMap-box__picture'>
                            <img className='productsMap-box__image' src={item.img[0]} alt='' />
                        </div>
                        <div className='productsMap-title'>{item.title}</div>
                        <div className='productsMap-box__price'>{item.price} грн</div>
                    </div>
                ))}
            </div>
            {productWindow && <div className='product-window__blur' onClick={touchProductClose}></div>}
            {productWindow && <div className='product-window'>
                <img onClick={touchProductClose} className='product-window__close' src="./img/close.png" alt="" />
                <div className='product-window__gallary'>
                    <div className='image-carousel__bootstrap'>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                            <div className="carousel-indicators">
                                {product.img.map((item, index) => (
                                    (index === 0) ? <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        : <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={index + 1}></button>
                                ))}
                            </div>
                            <div className="carousel-inner">
                                {product.img.map((item, index) => (
                                    (index === 0) ?
                                        <div key={index} className="carousel-item active product-window__gallary__picture">
                                            <img src={item} className="d-block product-window__gallary__img" alt="..." />
                                        </div> :
                                        <div key={index} className={`carousel-item product-window__gallary__picture`}
                                        >
                                            <img src={item} className="d-block product-window__gallary__img" alt="..." />
                                        </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className='product-window__gallary-box'>
                        {product.img.map((item, index) => (
                            <div className='product-window__gallary-box-picture'>
                                <img className='product-window__gallary-box-img' src={item} alt='' />
                            </div>
                        ))}
                    </div>

                </div>
                <div className='product-window__info'>
                    <h2 className='product-window__info-title'>{product.title}</h2>
                    <h2 className='product-window__info-article'>Артикул: {product.article}</h2>
                    <div className='product-window__info-line'></div>
                    <div className='product-window__info-price'>{product.price} грн.</div>
                    <div className='product-window__info-description'>{product.description} грн.</div>

                </div>
            </div>}
        </div>
    );
}

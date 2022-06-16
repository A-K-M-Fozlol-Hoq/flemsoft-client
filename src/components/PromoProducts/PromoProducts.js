import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import AllProducts from './AllProducts';
import './PromoProducts.css';
const PromoProducts = () => {
  const products = [
    {
      id: 1,
      title: 'Apple Macbook Air MWTJ2SA/A  Space Grey (2020)',
      price: '$1,099',
      oldPrice: '$1193.71',
      sold: 400,
      inStock: 600,
      soldPercentage: 40,
      discount: '15',
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: { rate: 3.9, count: 120 },
      isNew: true,
      by: 'Co., Ltd Minie Li',
    },
    {
      id: 2,
      title: 'Apple Watch Series 5 MWV62VN/A ',
      price: '$514.15',
      oldPrice: '$539.06 ',
      sold: 700,
      soldPercentage: 70,
      inStock: 300,
      discount: '12',
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: "men's clothing",
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      rating: { rate: 4.1, count: 259 },
      isFavorite: true,
      by: '247 Store',
    },
  ];
  return (
    <div
      className="promo-products-wrapper"
      style={{ width: '80%', marginLeft: '10%' }}
    >
      <div
        style={{
          display: 'flex',
          marginBottom: '10px',
          justifyContent: 'space-between',
        }}
      >
        <h5>Promo Product</h5>
        <div style={{ display: 'flex' }}>
          <span className="txt-brand">See All</span>
          <div>
            <FiChevronLeft
              style={{
                color: '#858585',
                marginLeft: '60px',
                marginRight: '10px',
              }}
            />
            <FiChevronRight />
          </div>
        </div>
      </div>
      <AllProducts products={products}></AllProducts>
    </div>
  );
};

export default PromoProducts;

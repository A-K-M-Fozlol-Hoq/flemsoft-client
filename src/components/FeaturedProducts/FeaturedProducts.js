import React from 'react';
import realEstate from './realEstate.jpg';
import technoogy from './technoogy.jpg';
import watch from './watch.jpg';
import glasses from './glasses.jpg';
import cosmetic from './cosmetic.jpg';
import food from './food.jpg';
import './FeaturedProducts.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import AllProducts from '../NewProducts/AllProducts';
const products = [
  {
    id: 1,
    title: 'Apple Macbook Pro 2019 MWP42SA/A',
    price: 109.95,
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
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: { rate: 4.1, count: 259 },
    isFavorite: true,
    by: '247 Store',
  },
  {
    id: 3,
    title: 'Apple Macbook Air MWTJ2SA/A  Space Grey (2020)',
    price: 55.99,
    oldPrice: 50.99,
    disCount: 15,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: { rate: 4.7, count: 500 },
    by: 'Kimpine Calculator',
  },
  {
    id: 4,
    title: 'Hand Watch Rossini – 5395T01G',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: { rate: 2.1, count: 430 },
    by: 'Co., Ltd Minie Li',
    isSoldOut: true,
  },
  {
    id: 5,
    title: 'Apple Macbook Pro MWTJ2SA/A  Space Grey',
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 4.6, count: 400 },
    by: 'Co., Ltd Minie Li',
  },
  {
    id: 6,
    title: 'Apple Macbook Pro 2020 MWP42SA/A (Space Grey)',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 3.9, count: 70 },
    by: 'Co., Ltd Minie Li',
  },
];
const FeaturedProducts = () => {
  return (
    <div
      className="featured-products-wrapper"
      style={{ width: '80%', marginLeft: '10%' }}
    >
      <div
        style={{
          display: 'flex',
          marginBottom: '10px',
          justifyContent: 'space-between',
        }}
      >
        <h5>Shop BY Categories</h5>
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6,1fr)',
          gridGap: '10px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img
            style={{ height: '40px', width: '40px' }}
            src={realEstate}
            alt=""
          />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>Real Estate</h5>
        </div>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img
            style={{ height: '40px', width: '40px' }}
            src={technoogy}
            alt=""
          />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>Technology</h5>
        </div>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img style={{ height: '40px', width: '40px' }} src={watch} alt="" />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>Watch</h5>
        </div>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img style={{ height: '40px', width: '40px' }} src={glasses} alt="" />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>Glasses</h5>
        </div>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img
            style={{ height: '40px', width: '40px' }}
            src={cosmetic}
            alt=""
          />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>Cosmetic</h5>
        </div>
        <div
          style={{
            textAlign: 'center',
            border: '1px solid #000',
            padding: '50px 0',
            borderRadius: '10px',
          }}
        >
          <img style={{ height: '40px', width: '40px' }} src={food} alt="" />
          <h5 style={{ fontSize: '15px', marginTop: '10px' }}>
            Food <br /> High Grade
          </h5>
        </div>
      </div>
      <AllProducts products={products}></AllProducts>
    </div>
  );
};

export default FeaturedProducts;

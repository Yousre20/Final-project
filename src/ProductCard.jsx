import React from 'react';

const ProductCard = ({ imgSrc, title, oldPrice, currentPrice, brand }) => {
  return (
    <div className="product-card">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="product-title">{title}</h5>
          <p className="product-brand">{brand}</p>
          <div className="price-container">
            <span className="price-old">{oldPrice} <span className="discount-text">وفر</span></span>
            <span className="price-current">{currentPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;  // Make sure this is a default export

import React from 'react';
import ProductCard from '../ProductCard';  // Ensure correct default import
import FilterSidebar from '../FilterSidebar';  // Ensure correct default import
import './ProductsPage.css';

const ProductsPage = () => {
  return (
    <>
      {/* Free Shipping Banner */}
      <div className="free-shipping-banner">
        شحن مجاني بقيمة مشتريات اعلى من 1299 جنيه
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">ACTIV</a>
        <div className="ml-auto">
          <a href="#" className="btn btn-primary">Download App</a>
          <a href="./collection(arabic).html" className="btn btn-outline-dark">Arabic</a>
        </div>
      </nav>

      {/* Main Container */}
      <div className="main-container">
        {/* Product Section */}
        <div className="products-container">
          <ProductCard
            imgSrc="./images/category/FOO-ACTIVN-20227692-BLACK_1_large.webp"
            title="ACTIVNEW WOMEN'S FLIP FLOP - D.PURPLE"
            oldPrice="EGP 20.00"
            currentPrice="EGP 99.00"
            brand="ActivNew"
          />
          <ProductCard
            imgSrc="./images/category/FOO-ACTIVN-PORT20238009-L.BLUE_1-1_large.webp"
            title="ACTIVNEW WOMEN'S FLIP FLOP - D.PURPLE"
            oldPrice="EGP 20.00"
            currentPrice="EGP 99.00"
            brand="ActivNew"
          />
          <ProductCard
            imgSrc="./images/category/FOO-ACTIVN-PORT20238044-D.PURPLE_1_large.webp"
            title="ACTIVNEW WOMEN'S FLIP FLOP - D.PURPLE"
            oldPrice="EGP 20.00"
            currentPrice="EGP 99.00"
            brand="ActivNew"
          />
          <ProductCard
            imgSrc="./images/category/FOO-ACTIVN-PORT20238050-D.PINK_1_large.webp"
            title="ACTIVNEW WOMEN'S FLIP FLOP - D.PURPLE"
            oldPrice="EGP 20.00"
            currentPrice="EGP 99.00"
            brand="ActivNew"
          />
        </div>
      </div>

      {/* Filter Sidebar */}
      <FilterSidebar />
    </>
  );
};

export default ProductsPage;

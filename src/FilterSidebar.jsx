import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <h5>Available</h5>
      <div>
        <input type="checkbox" id="in-stock" /> In stock<br />
        <input type="checkbox" id="out-stock" /> Out of stock
      </div>

      <h5 className="mt-4">Price</h5>
      <input type="range" className="form-control-range" id="priceRange" />

      <h5 className="mt-4">Product Type</h5>
      <div>
        <input type="checkbox" /> Fashion<br />
        <input type="checkbox" /> Lifestyle<br />
        <input type="checkbox" /> Running<br />
        <input type="checkbox" /> Slippers, Flip Flops & Clogs<br />
        <input type="checkbox" /> Trekking<br />
        <input type="checkbox" /> Walking<br />
      </div>

      <h5 className="mt-4">Size</h5>
      <div>
        <input type="checkbox" /> 36<br />
        <input type="checkbox" /> 37<br />
        <input type="checkbox" /> 38<br />
        <input type="checkbox" /> 39<br />
        <input type="checkbox" /> 40<br />
        <input type="checkbox" /> 41<br />
      </div>
    </div>
  );
};

export default FilterSidebar;

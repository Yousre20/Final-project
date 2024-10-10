import React from 'react';

const BranchesPage = () => {
  return (
    <div>
      <h1>فروعنا</h1>
      <div className="container-fluid">
        <div className="row">
          {/* Branch List Section */}
          <div className="col-md-6 col-12 p-3 d-flex flex-column">
            <input type="text" className="form-control mb-3 search-bar text-end" placeholder="ابحث عن فروعنا" />
            <div className="branch-list flex-grow-1">
              {[
                {
                  name: "القاهرة التجمع الخامس",
                  address: "التجمع الخامس، التسعين الشمالي",
                  phone: "01003574577"
                },
                {
                  name: "مدينة نصر",
                  address: "مول سيتي ستارز - المرحلة الأولى - الدور الرابع",
                  phone: "01026755583"
                },
                // Add more branches as needed
              ].map((branch, index) => (
                <div className="branch-item" key={index}>
                  <h4>{branch.name}</h4>
                  <p>{branch.address}</p>
                  <p>{branch.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="col-md-6 col-12 p-0">
            <div className="map"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;
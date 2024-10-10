import React, { Component } from 'react'
import { Link } from "react-router-dom"; // Import Link
/* eslint-disable */
export default class MyNav extends Component {
  render() {
    return (
        <React.Fragment>
         <div className="container text-center">
      <h2 className="text-end" style={{ fontSize: "50px", color: "rgb(10, 10, 238)" }}>
        الاقسام الرئيسية
      </h2>
      <section className="main-sections py-5">
        <div className="d-flex justify-content-center flex-wrap">
        <Link to="/ProductsPage" className="text-dark"><div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/sales.webp"
                className="rounded-circle"
                alt=" تخفيضات"
                width="200"
                height="200"
              />
            </a>
            <p>تخفيضات </p>
          </div></Link>
          <Link to="/ProductsPage" className="text-dark"><div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/bages.webp"
                className="rounded-circle"
                alt=" شنط وحقائب"
                width="200"
                height="200"
              />
            </a>
            <p>شنط وحقائب</p>
          </div></Link>
          <Link to="/ProductsPage" className="text-dark"><div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/swim.webp"
                className="rounded-circle"
                alt="سباحة"
                width="200"
                height="200"
              />
            </a>
            <p>سباحة </p>
          </div></Link>
          <Link to="/ProductsPage" className="text-dark"><div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/woman.webp"
                className="rounded-circle"
                alt=" نسائي"
                width="200"
                height="200"
              />
            </a>
            <p>نسائي </p>
          </div></Link>
          <Link to="/ProductsPage" className="text-dark"><div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/man.webp"
                className="rounded-circle"
                alt="رجالي"
                width="200"
                height="200"
              />
            </a>
            <p>رجالي</p>
          </div></Link>
          
          <Link to="/ProductsPage" className="text-dark"><div className="text-center m-2">
            <a href="">
              <img
                src="./images/mainn/child.webp"
                className="rounded-circle"
                alt="أطفال"
                width="200"
                height="200"
              />
            </a>
            <p>أطفال</p>
          </div></Link>
          <Link to="/ProductsPage" className="text-dark">
          <div className="text-center m-2"> 
            <a href=""> 
              <img src="./images/mainn/10_9ed2129b-a2c1-43fc-8c9e-3225a9dae6a8.webp" 
              className="rounded-circle"
               alt="  مستلزمات مدرسية" 
               width="200"
                height="200" />
                 </a> <p> مستلزمات مدرسية</p>
                  </div></Link>
                  <Link to="/ProductsPage" className="text-dark">
          <div className="text-center m-2"> 
            <a href=""> 
              <img src="./images/mainn/less100.webp" 
              className="rounded-circle"
               alt=" أقل من 100 جنيه" 
               width="200"
                height="200" />
                 </a> <p> أقل من 100 جنيه</p>
                  </div></Link>
        </div>
      </section>
    </div>
      </React.Fragment>
    )
  }
}

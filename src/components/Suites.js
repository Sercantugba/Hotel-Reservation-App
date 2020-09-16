import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap/'

function Suites(props) {
  return (
    
      <div className="photo" style={{color:'white'}}>
      <Carousel>
      <Carousel.Item>
                   <img src={require("../images/hotel-room-.jpg")} className="d-block w-100" alt="FitnessCenter"/>
                    </Carousel.Item>
                    <Carousel.Item>
                          <img src={require("../images/pool2.jpg")} className="d-block w-100" alt=" BathRoom2"/>
                      </Carousel.Item>
                      <Carousel.Item>
                          <img src={require("../images/pool.jpg")}  className="d-block w-100" alt="Bedroom"/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <img src={require("../images/rest.jpg")}  className="d-block w-100" alt="Bedroom"/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <img src={require("../images/room.jpg")}  className="d-block w-100" alt="Bedroom"/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <img src={require("../images/sea.jpg")}  className="d-block w-100" alt="Bedroom"/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <img src={require("../images/suite.jpg")}  className="d-block w-100" alt="Bedroom"/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <img src={require("../images/type_hotel.jpg")}  className="d-block w-100" alt="Bedroom"/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <img src={require("../images/type2.jpg")}  className="d-block w-100" alt="Bedroom"/>
                     </Carousel.Item>
                     <Carousel.Item>
                          <img src={require("../images/typethree.jpg")}  className="d-block w-100" alt="Bedroom"/>
                     </Carousel.Item>
                  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                  </a>
             
          
          </Carousel>
      </div>
      
  );
}
export default Suites;
import React from 'react';
import '../../styles/carousel.css';
import albert1 from '../image/chidindu (15).png';
import albert2 from '../image/chidindu (13).png';
import albert3 from '../image/chidindu (14).png';

function carousel() {
  return (
    <div >
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <div class=" text-center">
            <div className="row">
              <div className="col-xl-6 col-md-12 col-sm-12">
                <img src={albert1} className="img-fluid small-image d-block w-100" alt="..." />
              </div>
              <div className="col-xl-6 col-md-12 col-sm-12 einstein_text">
              " I AM ALBERT EINSTEIN "
                <p>GERMAN PHYSICIST (1879-1955) </p>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className=" text-center">
            <div className="row">
              <div className="col-xl-5 col-md-12 col-sm-12">
                <img src={albert2} className="img-fluid small-image d-block" style={{ width: '100%' }} alt="..." />
              </div>
              <div className="col-xl-7 col-md-12 col-sm-12">
              " The only source of knowledge is experience "
                <p>Albert Einstein</p>
               
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="text-center">
            <div className="row">
              <div className="col-xl-6 col-md-12 col-sm-12">
                <img src={albert3} className="img-fluid small-image d-block" style={{ width: '100%' }} alt="..." />
              </div>
              <div className="col-xl-6 col-md-12 col-sm-12">
              " Life is like riding a bicycle. To keep your balance, you must keep moving "
                <p>Albert Einstein</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  )
}

export default carousel
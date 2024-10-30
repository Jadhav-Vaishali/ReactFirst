import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.jpg';
import img1 from './assets/IMG1.jpg';
import img2 from './assets/verver.jpg';
import manager from './assets/manager.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand mb-5 bg-white shadow fixed-top">
          <div className="navbar-collapse navbar2">
            <div className="mt-4 d-flex justify-content-start"></div>
            <div>
              <ul className="navbar-nav me-auto">
                <img src={logo} alt="Logo" className="compName img-responsive" style={{ width: '220px', height: '120px' }} />

                <li className="mt-4 hideContaint">
                  <a className="text-dark nav-link ms-5 me-3 btnhover">
                    <b>Home</b>
                  </a>
                </li>
                <li className="ms-3 mt-4 hideContaint">
                  <a className="text-dark nav-link me-3">
                    <b>About Us</b>
                  </a>
                </li>
                <li className="ms-3 mt-4 hideContaint">
                  <a className="text-dark nav-link me-3 btnhover">
                    <b>Services</b>
                  </a>
                </li>
                <li className="ms-3 mt-4 hideContaint">
                  <a className="text-dark nav-link me-3 btnhover">
                    <b>Projects</b>
                  </a>
                </li>
                <li className="ms-3 mt-4 hideContaint">
                  <a className="text-dark nav-link me-3 btnhover">
                    <b>Team Details</b>
                  </a>
                </li>
                <li className="mt-4 hideContaint">
                  <a className="text-dark nav-link me-3 btnhover">
                    <b>Contact</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="mt-5">
          <div id="carouselExample" className="carousel slide mt-5" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-5 mt-5">
                      <div className="mb-5 p-5">
                        <h1 className="WecomeTag d-flex justify-content-start h-100" style={{ fontSize: '5rem' }}>
                          <b>PROXIMA</b>
                        </h1>
                        <h5 className="mt-3 d-flex justify-content-center" style={{ fontSize: '3vw' }}>
                          Retail and office axis proxima
                        </h5>
                        <p>Kasarwadi Nashik<br />Fata area<br />50000</p>
                        <a href="#" className="btn btn-primary rounded-pill w-50 mt-3">View Our Work</a>
                      </div>
                    </div>
                    <div className="col-lg-7 mt-4">
                      <img src={img1} alt="Proxima" className="w-100 h-100" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-5 mt-5">
                      <div className="mb-5 p-5">
                        <h1 className="WecomeTag d-flex justify-content-start h-100" style={{ fontSize: '5rem' }}>
                          <b>SECOND SLIDE</b>
                        </h1>
                        <h5 className="mt-3 d-flex justify-content-center" style={{ fontSize: '3vw' }}>
                          Subtitle for Second Slide
                        </h5>
                        <p>Description for the second slide goes here.</p>
                        <a href="#" className="btn btn-primary rounded-pill w-50 mt-3">Learn More</a>
                      </div>
                    </div>
                    <div className="col-lg-7 mt-4">
                      <img src={img2} alt="Second slide" className="w-100 h-100" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-5 mt-5">
                      <div className="mb-5 p-5">
                        <h1 className="WecomeTag d-flex justify-content-start h-100" style={{ fontSize: '5rem' }}>
                          <b>THIRD SLIDE</b>
                        </h1>
                        <h5 className="mt-3 d-flex justify-content-center" style={{ fontSize: '3vw' }}>
                          Subtitle for Third Slide
                        </h5>
                        <p>Description for the third slide goes here.</p>
                        <a href="#" className="btn btn-primary rounded-pill w-50 mt-3">Discover More</a>
                      </div>
                    </div>
                    <div className="col-lg-7 mt-4">
                      <img src={img1} alt="Third slide" className="w-100 h-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="about mt-5 shadow">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-5">
                <img src={manager} alt="Manager" className="w-100 h-100" />
              </div>
              <div className="col-lg-6 p-5">
                <div>
                  <h4 className="d-flex justify-content-start"><b>About Us</b></h4>
                  <p>Our design process is the expression of the dialog between client and architect; a willingness to explore possibilities with the realization that there is never a single answer or solution. Rather, there is the elegant solution, the one that delights and satisfies.</p>
                  <p>The comprehensive design process that searches for the elegant solution is at the core of the unique and individualized architectural experience and the highest levels of design and personalized service that can be found at</p>
                  <button className="text-white bookApointment w-25 border-0">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

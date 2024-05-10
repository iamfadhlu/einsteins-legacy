import './App.css';
import './styles/navbar.css'
import Carousel from '../src/components/carousel/carousel'
import Life from './components/life/life';
import Education from './components/education/education';
import logo from './components/image/atomlogo.png'
import Career from './components/career/career'


function App() {
  return (

    <div>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="Bootstrap" width="40" height="30" />
            <span className="main-text">EINSETEIN'S</span>
            <section className="sub-text">LEGACY</section>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <a className="nav-link" aria-current="page" href="#heading1" >Life</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#heading2" >Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Career</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Achievement
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">NOBEL PRIZE AWARD</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Publications</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <Carousel />
      <br />
      <h1 id="heading1" >Einstein's Life </h1>

      <Life />
      <h2 id="heading2">Einstein's Education</h2>
      <Education />


      <section>
        <Career />
      </section>
    </div>

  );
}

export default App;

import './App.css';
import './styles/navbar.css';
import Carousel from '../src/components/carousel/carousel';
import Life from './components/life/life';
import Education from './components/education/education';
import logo from './components/image/physics (3).png';
import Career from './components/career/career';
import Achievement from './components/achievement/achievement';
import Nobelprize from './components/nobelprize/nobelprize';
import Books from './components/book/book';



function App() {
  return (

    <div>
      <header className="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" width="30" height="23" />
        </a>
        <span className="main-text">EINSTEIN'S</span> <span className="sub-text">LEGACY</span>
      </header>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid ">
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <a className="nav-link" aria-current="page" href="#life" >Life</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#education" >Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#career">Career</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page"href="#achievements" >
                  Achievement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#books">Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page"href="#nobelprize" >
                  Nobel prize
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <Carousel />
    </div>

  );
}

export default App;

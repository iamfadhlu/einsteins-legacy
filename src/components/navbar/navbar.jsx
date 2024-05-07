import React from 'react'
// import { Dropdown, Collapse, initMDB } from 'mdb-ui-kit';
// import { useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";


function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg">
                <div className="navbar-container container">
                    <a className="navbar-brand" href="/">
                        <div className="main-text">EINSETEIN'S</div>
                        <div className="sub-text">LEGACY</div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Life</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Career</a>
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
        </div>

    )
}

export default Navbar
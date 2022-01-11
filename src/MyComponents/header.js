import React from 'react';
import logo from '../myImages/IBV-Logo.png';
import './Styles.css';

export default function header() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="nav-link active" aria-current="page" href="home"><img src= {logo} width='150px' height='80px'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link active" aria-current="page" href="home">Home</a>
                            </li>
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link active" aria-current="page" href="about">About US</a>
                            </li>
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link active" aria-current="page" href="services">Our Services</a>
                            </li>
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link active" aria-current="page" href="pillars">Our Pillars</a>
                            </li>
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link active" aria-current="page" href="contact">Contact Us</a>
                            </li>
                            <li className="nav-item ms-2 me-2">
                                <a className="nav-link active" aria-current="page" href="carrers">Careers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

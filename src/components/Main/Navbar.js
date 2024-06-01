import React, { useState } from 'react';
import '../../scss/components/_navigation.scss';
import '../../scss/components/_common.scss';
import "../../scss/_typography.scss";
import '../../scss/button.scss';
import '../../Plugins/bootstrap/bootstrap.min.css';
import logo from '../../images/logo.png';
import ticket from '../../images/icon/ticket.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
                <div className="container-fluid p-0">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        aria-controls="navbarNav" 
                        aria-expanded={isOpen} 
                        aria-label="Toggle navigation" 
                        onClick={toggleNavbar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            {/* Home Dropdown */}
                            <li className="nav-item dropdown active">
                                <Link className="nav-link dropdown-toggle" to="/" id="homeDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Home <i className="fa fa-angle-down"></i><span>/</span>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                                    <li><Link className="dropdown-item" to="/">Homepage</Link></li>
                                    <li><Link className="dropdown-item" to="/Home2">Homepage 2</Link></li>
                                </ul>
                            </li>
                            {/* Speakers Link */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Speaker">Speakers<span>/</span></Link>
                            </li>
                            {/* Pages Dropdown */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/About" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages <i className="fa fa-angle-down"></i><span>/</span>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                                    <li><Link className="dropdown-item" to="/About">About Us</Link></li>
                                    <li><Link className="dropdown-item" to="/SpeakerDetail">Single Speaker</Link></li>
                                    <li><Link className="dropdown-item" to="/GalleryDetail">Gallery</Link></li>
                                    <li><Link className="dropdown-item" to="/GalleryDetail2">Gallery-02</Link></li>
                                    <li><Link className="dropdown-item" to="/Testimonal">Testimonial</Link></li>
                                    <li><Link className="dropdown-item" to="/Price">Pricing</Link></li>
                                    <li><Link className="dropdown-item" to="/FAQ">FAQ</Link></li>
                                    <li><Link className="dropdown-item" to="/Error">404</Link></li>
                                    {/* Submenu */}
                                    <li className="dropdown dropdown-submenu dropright">
                                        <Link className="dropdown-item dropdown-toggle" to="/" id="submenuDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sub Menu
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="submenuDropdown">
                                            <li><Link className="dropdown-item" to="/">Submenu 01</Link></li>
                                            <li><Link className="dropdown-item" to="/Home2">Submenu 02</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* Schedule Link */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Schedule">Schedule<span>/</span></Link>
                            </li>
                            {/* Sponsors Link */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sponsors">Sponsors<span>/</span></Link>
                            </li>
                            {/* News Dropdown */}
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/NewsWithoutSlider" id="newsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    News <i className="fa fa-angle-down"></i><span>/</span>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="newsDropdown">
                                    <li><Link className="dropdown-item" to="/NewsWithoutSlider">News without sidebar</Link></li>
                                    <li><Link className="dropdown-item" to="/NewsWithRightSlider">News with right sidebar</Link></li>
                                    <li><Link className="dropdown-item" to="/NewsWithLeftSlider">News with left sidebar</Link></li>
                                    <li><Link className="dropdown-item" to="/NewsSinglePage">News Single</Link></li>
                                    {/* Submenu */}
                                    <li className="dropdown dropdown-submenu dropleft">
                                        <Link className="dropdown-item dropdown-toggle" to="/" id="newsSubmenuDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sub Menu
                                        </Link>
                                        <ul className="dropdown-menu" aria-labelledby="newsSubmenuDropdown">
                                            <li><Link className="dropdown-item" to="/">Submenu 01</Link></li>
                                            <li><Link className="dropdown-item" to="/Home2">Submenu 02</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* Contact Link */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                        <Link to="/Contact" className="ticket">
                            <img src={ticket} alt="ticket" />
                            <span>Buy Ticket</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

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
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubDropdown, setActiveSubDropdown] = useState(null);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const toggleSubDropdown = (subDropdown) => {
        setActiveSubDropdown(activeSubDropdown === subDropdown ? null : subDropdown);
    };

    const closeNavbar = () => {
        setIsOpen(false);
        setActiveDropdown(null);
        setActiveSubDropdown(null);
    };

    return (
        <>
            <nav className="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
                <div className="container-fluid p-0">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/" onClick={closeNavbar}>
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
                            <li className={`nav-item dropdown ${activeDropdown === 'home' ? 'show' : ''}`}>
                                <Link 
                                    className="nav-link dropdown-toggle" 
                                    to="/" 
                                    id="homeDropdown" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded={activeDropdown === 'home'}
                                    onClick={() => toggleDropdown('home')}
                                >
                                    Home <i className="fa fa-angle-down"></i><span>/</span>
                                </Link>
                                <ul className={`dropdown-menu ${activeDropdown === 'home' ? 'show' : ''}`} aria-labelledby="homeDropdown">
                                    <li><Link className="dropdown-item" to="/" onClick={closeNavbar}>Homepage</Link></li>
                                    <li><Link className="dropdown-item" to="/Home2" onClick={closeNavbar}>Homepage 2</Link></li>
                                </ul>
                            </li>
                            {/* Speakers Link */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Speaker" onClick={closeNavbar}>Speakers<span>/</span></Link>
                            </li>
                            {/* Pages Dropdown */}
                            <li className={`nav-item dropdown ${activeDropdown === 'pages' ? 'show' : ''}`}>
                                <Link 
                                    className="nav-link dropdown-toggle" 
                                    to="/About" 
                                    id="pagesDropdown" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded={activeDropdown === 'pages'}
                                    onClick={() => toggleDropdown('pages')}
                                >
                                    Pages <i className="fa fa-angle-down"></i><span>/</span>
                                </Link>
                                <ul className={`dropdown-menu ${activeDropdown === 'pages' ? 'show' : ''}`} aria-labelledby="pagesDropdown">
                                    <li><Link className="dropdown-item" to="/About" onClick={closeNavbar}>About Us</Link></li>
                                    <li><Link className="dropdown-item" to="/SpeakerDetail" onClick={closeNavbar}>Single Speaker</Link></li>
                                    <li><Link className="dropdown-item" to="/GalleryDetail" onClick={closeNavbar}>Gallery</Link></li>
                                    <li><Link className="dropdown-item" to="/GalleryDetail2" onClick={closeNavbar}>Gallery-02</Link></li>
                                    <li><Link className="dropdown-item" to="/Testimonal" onClick={closeNavbar}>Testimonial</Link></li>
                                    <li><Link className="dropdown-item" to="/Price" onClick={closeNavbar}>Pricing</Link></li>
                                    <li><Link className="dropdown-item" to="/FAQ" onClick={closeNavbar}>FAQ</Link></li>
                                    <li><Link className="dropdown-item" to="/Error" onClick={closeNavbar}>404</Link></li>
                                    {/* Submenu */}
                                    <li className={`dropdown dropdown-submenu dropright ${activeSubDropdown === 'submenu' ? 'show' : ''}`}>
                                        <Link 
                                            className="dropdown-item dropdown-toggle" 
                                            to="/" 
                                            id="submenuDropdown" 
                                            role="button" 
                                            data-toggle="dropdown" 
                                            aria-haspopup="true" 
                                            aria-expanded={activeSubDropdown === 'submenu'}
                                            onClick={() => toggleSubDropdown('submenu')}
                                        >
                                            Sub Menu
                                        </Link>
                                        <ul className={`dropdown-menu ${activeSubDropdown === 'submenu' ? 'show' : ''}`} aria-labelledby="submenuDropdown">
                                            <li><Link className="dropdown-item" to="/" onClick={closeNavbar}>Submenu 01</Link></li>
                                            <li><Link className="dropdown-item" to="/Home2" onClick={closeNavbar}>Submenu 02</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* Schedule Link */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Schedule" onClick={closeNavbar}>Schedule<span>/</span></Link>
                            </li>
                            {/* Sponsors Link */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sponsors" onClick={closeNavbar}>Sponsors<span>/</span></Link>
                            </li>
                            {/* News Dropdown */}
                            <li className={`nav-item dropdown ${activeDropdown === 'news' ? 'show' : ''}`}>
                                <Link 
                                    className="nav-link dropdown-toggle" 
                                    to="/NewsWithoutSlider" 
                                    id="newsDropdown" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded={activeDropdown === 'news'}
                                    onClick={() => toggleDropdown('news')}
                                >
                                    News <i className="fa fa-angle-down"></i><span>/</span>
                                </Link>
                                <ul className={`dropdown-menu ${activeDropdown === 'news' ? 'show' : ''}`} aria-labelledby="newsDropdown">
                                    <li><Link className="dropdown-item" to="/NewsWithoutSlider" onClick={closeNavbar}>News without sidebar</Link></li>
                                    <li><Link className="dropdown-item" to="/NewsWithRightSlider" onClick={closeNavbar}>News with right sidebar</Link></li>
                                    <li><Link className="dropdown-item" to="/NewsWithLeftSlider" onClick={closeNavbar}>News with left sidebar</Link></li>
                                    <li><Link className="dropdown-item" to="/NewsSinglePage" onClick={closeNavbar}>News Single</Link></li>
                                    {/* Submenu */}
                                    <li className={`dropdown dropdown-submenu dropleft ${activeSubDropdown === 'newsSubmenu' ? 'show' : ''}`}>
                                        <Link 
                                            className="dropdown-item dropdown-toggle" 
                                            to="/" 
                                            id="newsSubmenuDropdown" 
                                            role="button" 
                                            data-toggle="dropdown" 
                                            aria-haspopup="true" 
                                            aria-expanded={activeSubDropdown === 'newsSubmenu'}
                                            onClick={() => toggleSubDropdown('newsSubmenu')}
                                        >Sub Menu</Link>
                                        <ul className={`dropdown-menu ${activeSubDropdown === 'newsSubmenu' ? 'show' : ''}`} aria-labelledby="newsSubmenuDropdown">
                                            <li><Link className="dropdown-item" to="/" onClick={closeNavbar}>Submenu 01</Link></li>
                                            <li><Link className="dropdown-item" to="/Home2" onClick={closeNavbar}>Submenu 02</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/* Contact Link */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact" onClick={closeNavbar}>Contact</Link>
                            </li>
                        </ul>
                        <Link to="/Contact" className="ticket" onClick={closeNavbar}>
                            <img src={ticket} alt="ticket" />
                            <span>Buy Ticket</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

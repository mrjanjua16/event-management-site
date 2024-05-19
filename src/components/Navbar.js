import '../scss/components/_navigation.scss';
import '../scss/components/_common.scss';
import '../Plugins/bootstrap/bootstrap.min.css';
import logo from '../images/logo.png';
import ticket from '../images/icon/ticket.png';
import '../scss/button.scss';
import { Link, Router } from 'react-router-dom';


export default function Navbar()
{
    return (
<>
<nav class="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
  <div class="container-fluid p-0">
    {
    // logo
    } 
    <a class="navbar-brand" href="index.html">
      <img src={logo} alt="logo" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item dropdown active">
          <a class="nav-link" href="#!" data-toggle="dropdown">Home <i class="fa fa-angle-down"></i>
            <span>/</span>
          </a>
          {
          // Dropdown list 
          }
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/">Homepage</Link></li>
            <li><Link class="dropdown-item" to="/Event">Homepage 2</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="speakers.html">Speakers
            <span>/</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#!" data-toggle="dropdown">Pages <i class="fa fa-angle-down"></i><span>/</span></a>
          {
          //<!-- Dropdown list -->
            }
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="about-us.html">About Us</a></li>
            <li><a class="dropdown-item" href="single-speaker.html">Single Speaker</a></li>
            <li><a class="dropdown-item" href="gallery.html">Gallery</a></li>
            <li><a class="dropdown-item" href="gallery-two.html">Gallery-02</a></li>
            <li><a class="dropdown-item" href="testimonial.html">Testimonial</a></li>
            <li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
            <li><a class="dropdown-item" href="FAQ.html">FAQ</a></li>
            <li><a class="dropdown-item" href="404.html">404</a></li>
                    
            <li class="dropdown dropdown-submenu dropright">
              <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
    
              <ul class="dropdown-menu" aria-labelledby="dropdown0301">
                <li><a class="dropdown-item" href="index.html">Submenu 01</a></li>
                <li><a class="dropdown-item" href="index.html">Submenu 02</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="schedule.html">Schedule<span>/</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sponsors.html">Sponsors<span>/</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#!" data-toggle="dropdown">News <i class="fa fa-angle-down"></i><span>/</span>
          </a>
          {
          //<!-- Dropdown list -->
            }
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="news.html">News without sidebar</a></li>
            <li><a class="dropdown-item" href="news-right-sidebar.html">News with right sidebar</a></li>
            <li><a class="dropdown-item" href="news-left-sidebar.html">News with left sidebar</a></li>
            <li><a class="dropdown-item" href="news-single.html">News Single</a></li>

            <li class="dropdown dropdown-submenu dropleft">
              <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
    
              <ul class="dropdown-menu" aria-labelledby="dropdown0501">
                <li><a class="dropdown-item" href="index.html">Submenu 01</a></li>
                <li><a class="dropdown-item" href="index.html">Submenu 02</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
      <a href="contact.html" class="ticket">
        <img src={ticket} alt="ticket" />
        <span>Buy Ticket</span>
      </a>
    </div>
  </div>
</nav>
</>
)
}
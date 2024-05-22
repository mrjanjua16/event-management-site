import '../../scss/components/_navigation.scss';
import '../../scss/components/_common.scss';
import '../../Plugins/bootstrap/bootstrap.min.css';
import logo from '../../images/logo.png';
import ticket from '../../images/icon/ticket.png';
import '../../scss/button.scss';
import { Link } from 'react-router-dom';


export default function Navbar()
{
    return (
<>
<nav class="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
  <div class="container-fluid p-0">
    {
    // logo
    } 
    <Link class="navbar-brand" to="/">
      <img src={logo} alt="logo" />
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item dropdown active">
          <Link class="nav-link" to="/" data-toggle="dropdown">Home <i class="fa fa-angle-down"></i>
            <span>/</span>
          </Link>
          {
          // Dropdown list 
          }
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/">Homepage</Link></li>
            <li><Link class="dropdown-item" to="/Home2">Homepage 2</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Speaker">Speakers
            <span>/</span>
          </Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link" to="/" data-toggle="dropdown">Pages <i class="fa fa-angle-down"></i><span>/</span></Link>
          {
          //<!-- Dropdown list -->
            }
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/About">About Us</Link></li>
            <li><Link class="dropdown-item" to="/SpeakerDetail">Single Speaker</Link></li>
            <li><Link class="dropdown-item" to="gallery.html">Gallery</Link></li>
            <li><Link class="dropdown-item" to="gallery-two.html">Gallery-02</Link></li>
            <li><Link class="dropdown-item" to="testimonial.html">Testimonial</Link></li>
            <li><Link class="dropdown-item" to="pricing.html">Pricing</Link></li>
            <li><Link class="dropdown-item" to="FAQ.html">FAQ</Link></li>
            <li><Link class="dropdown-item" to="404.html">404</Link></li>
                    
            <li class="dropdown dropdown-submenu dropright">
              <Link class="dropdown-item dropdown-toggle" to="/" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</Link>
    
              <ul class="dropdown-menu" aria-labelledby="dropdown0301">
                <li><Link class="dropdown-item" to="index.html">Submenu 01</Link></li>
                <li><Link class="dropdown-item" to="index.html">Submenu 02</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="schedule.html">Schedule<span>/</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="sponsors.html">Sponsors<span>/</span></Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link" to="/" data-toggle="dropdown">News <i class="fa fa-angle-down"></i><span>/</span>
          </Link>
          {
          //<!-- Dropdown list -->
            }
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="news.html">News without sidebar</Link></li>
            <li><Link class="dropdown-item" to="news-right-sidebar.html">News with right sidebar</Link></li>
            <li><Link class="dropdown-item" to="news-left-sidebar.html">News with left sidebar</Link></li>
            <li><Link class="dropdown-item" to="news-single.html">News Single</Link></li>

            <li class="dropdown dropdown-submenu dropleft">
              <Link class="dropdown-item dropdown-toggle" to="/" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</Link>
    
              <ul class="dropdown-menu" aria-labelledby="dropdown0501">
                <li><Link class="dropdown-item" to="index.html">Submenu 01</Link></li>
                <li><Link class="dropdown-item" to="index.html">Submenu 02</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="contact.html">Contact</Link>
        </li>
      </ul>
      <Link to="contact.html" class="ticket">
        <img src={ticket} alt="ticket" />
        <span>Buy Ticket</span>
      </Link>
    </div>
  </div>
</nav>
</>
)
}
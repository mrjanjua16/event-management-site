import "../../scss/style.scss";
import footer from "../../images/footer-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faSquareThreads } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faVimeo } from "@fortawesome/free-brands-svg-icons";

export default function Footer()
{
    return(
        <>
<footer class="footer-main">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <div class="footer-logo">
            <img src={footer} alt="logo" class="img-fluid" />
          </div>
          <ul class="social-links-footer list-inline">
            <li class="list-inline-item">
              <Link to="/"><FontAwesomeIcon class="fa fa-facebook" icon={faFacebook} /></Link>
            </li>
            <li class="list-inline-item">
              <Link to="/"><FontAwesomeIcon class="fa fa-twitter" icon={faTwitter}></FontAwesomeIcon></Link>
            </li>
            <li class="list-inline-item">
              <Link to="/"><FontAwesomeIcon class="fa fa-instagram" icon={faLinkedin}></FontAwesomeIcon></Link>
            </li>
            <li class="list-inline-item">
              <Link to="/"><FontAwesomeIcon class="fa fa-rss" icon={faSquareThreads}></FontAwesomeIcon></Link>
            </li>
            <li class="list-inline-item">
              <Link to="/"><FontAwesomeIcon class="fa fa-vimeo" icon={faVimeo}></FontAwesomeIcon></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
        </>
);
}
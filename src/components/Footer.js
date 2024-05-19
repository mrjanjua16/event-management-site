import "../scss/style.scss";
import footer from "../images/footer-logo.png";

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
              <a href="/"><i class="fa fa-facebook"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="/"><i class="fa fa-twitter"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="/"><i class="fa fa-instagram"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="/"><i class="fa fa-rss"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="/"><i class="fa fa-vimeo"></i></a>
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
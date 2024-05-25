import "../../scss/style.scss";
import { Link } from "react-router-dom";

export default function FooterMain()
{
    return(
        <>
<footer class="subfooter">
  <div class="container">
    <div class="row">
      <div class="col-md-6 align-self-center">
        <div class="copyright-text">
          <p><Link to="/">Eventre</Link> © 2021, Designed &amp; Developed by <Link to="/">Mr_Janjua</Link></p>
        </div>
      </div>
      <div class="col-md-6">
        <Link to="/" class="to-top"><i class="fa fa-angle-up"></i></Link>
      </div>
    </div>
  </div>
</footer>        
        </>
    );
}
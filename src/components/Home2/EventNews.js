import "../../scss/style.scss";
import HR1 from "../../images/news/post-thumb-hr-one.jpg";
import HR2 from "../../images/news/post-thumb-hr-two.jpg";
import HR3 from "../../images/news/post-thumb-hr-three.jpg";
import HR4 from "../../images/news/post-thumb-hr-four.jpg";
import { Link } from "react-router-dom";

export default function EventNews()
{
    return(
        <>
<section class="news-hr section mb-0">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Eventre <span class="alternate">News</span></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, enim.</p>
				</div>
			</div>
		</div>
		<div class="row no-gutters">
			<div class="col-lg-6 col-md-6">
				<article class="news-post-hr">
					<div class="post-thumb">
						<Link to="/">
							<img src={HR1} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-contents border-top">
						<div class="post-title">
							<h6><Link to="/">Default title here</Link></h6>
						</div>
						<div class="post-exerpts">
							<p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed doeiuse tempor incididunt ut
							</p>
						</div>

						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="more">
							<Link to="/">Show more</Link>
						</div>
					</div>
				</article>
			</div>
			<div class="col-lg-6 col-md-6">
				<article class="news-post-hr">
					<div class="post-thumb">
						<Link to="/">
							<img src={HR2} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-contents border-top">
						<div class="post-title">
							<h6><Link to="/">Default title here</Link></h6>
						</div>
						<div class="post-exerpts">
							<p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed doeiuse tempor incididunt ut
							</p>
						</div>

						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="more">
							<Link to="/">Show more</Link>
						</div>
					</div>
				</article>
			</div>
			<div class="col-lg-6 col-md-6">
				<article class="news-post-hr">
					<div class="post-thumb">
						<Link to="/">
							<img src={HR3} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-contents">
						<div class="post-title">
							<h6><Link to="/">Default title here</Link></h6>
						</div>
						<div class="post-exerpts">
							<p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed doeiuse tempor incididunt ut
							</p>
						</div>

						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="more">
							<Link to="/">Show more</Link>
						</div>
					</div>
				</article>
			</div>
			<div class="col-lg-6 col-md-6">
				<article class="news-post-hr">
					<div class="post-thumb">
						<Link to="/">
							<img src={HR4} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-contents">
						<div class="post-title">
							<h6><Link to="/">Default title here</Link></h6>
						</div>
						<div class="post-exerpts">
							<p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed doeiuse tempor incididunt ut
							</p>
						</div>

						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="more">
							<Link to="/">Show more</Link>
						</div>
					</div>
				</article>
			</div>
		</div>
	</div>
</section>        
        </>
    );
}
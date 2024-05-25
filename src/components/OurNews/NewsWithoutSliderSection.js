import React from "react";
import NewImg1 from "../../images/news/post-thumb-one.jpg";
import NewImg2 from "../../images/news/post-thumb-two.jpg";
import NewImg3 from "../../images/news/post-thumb-three.jpg";
import NewImg4 from "../../images/news/post-thumb-four.jpg";
import NewImg5 from "../../images/news/post-thumb-five.jpg";
import NewImg6 from "../../images/news/post-thumb-six.jpg";
import NewImg7 from "../../images/news/post-thumb-seven.jpg";
import "../../scss/style.scss";
import { Link } from "react-router-dom";

export default function NewsWithoutSliderSection()
{
    return(
        <>
<section class="news section">
	<div class="container">
		<div class="row justify-content-center mt-30">
			<div class="col-lg-4 col-md-6 col-sm-8">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src={NewImg1} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<Link to="/">Admin</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<Link to="/">350</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<Link to="/">30</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src={NewImg2} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<Link to="/">Admin</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<Link to="/">350</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<Link to="/">30</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src={NewImg3} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<Link to="/">Admin</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<Link to="/">350</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<Link to="/">30</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src={NewImg4} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<Link to="/">Admin</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<Link to="/">350</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<Link to="/">30</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src={NewImg5} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<Link to="/">Admin</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<Link to="/">350</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<Link to="/">30</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src="images/news/post-thumb-six.jpg" alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<Link to="/">Admin</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<Link to="/">350</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<Link to="/">30</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src={NewImg5} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<Link to="/">Admin</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<Link to="/">350</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<Link to="/">30</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src={NewImg6} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<Link to="/">Admin</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<Link to="/">350</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<Link to="/">30</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 col-sm-8">
				<div class="blog-post">
					<div class="post-thumb">
						<Link to="/NewsSinglePage">
							<img src={NewImg7} alt="post-image" class="img-fluid" />
						</Link>
					</div>
					<div class="post-content">
						<div class="date">
							<h4>20<span>May</span></h4>
						</div>
						<div class="post-title">
							<h2><Link to="/NewsSinglePage">Elementum purus id ultrices.</Link></h2>
						</div>
						<div class="post-meta">
							<ul class="list-inline">
								<li class="list-inline-item">
									<i class="fa fa-user-o"></i>
									<Link to="/">Admin</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-heart-o"></i>
									<Link to="/">350</Link>
								</li>
								<li class="list-inline-item">
									<i class="fa fa-comments-o"></i>
									<Link to="/">30</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 text-center">
				<nav class="d-flex justify-content-center">
				  <ul class="pagination">
				  	<li class="page-item">
				      <Link class="page-link" href="/" aria-label="prev">
				        <span aria-hidden="true"><i class="fa fa-angle-left"></i></span>
				        <span class="sr-only">prev</span>
				      </Link>
				    </li>
				    <li class="page-item active"><Link class="page-link" href="/">1</Link></li>
				    <li class="page-item"><Link class="page-link" href="/">2</Link></li>
				    <li class="page-item"><Link class="page-link" href="/">3</Link></li>
				    <li class="page-item">
				      <Link class="page-link" href="/" aria-label="Next">
				        <span aria-hidden="true"><i class="fa fa-angle-right"></i></span>
				        <span class="sr-only">Next</span>
				      </Link>
				    </li>
				  </ul>
				</nav>
			</div>
		</div>
	</div>
</section>
        </>
    );
}
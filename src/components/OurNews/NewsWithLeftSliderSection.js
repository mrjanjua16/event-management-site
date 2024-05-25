import React from "react";
import NewImg1 from "../../images/news/post-thumb-one.jpg";
import NewImg2 from "../../images/news/post-thumb-two.jpg";
import NewImg3 from "../../images/news/post-thumb-three.jpg";
import NewImg4 from "../../images/news/post-thumb-four.jpg";
import NewImg5 from "../../images/news/post-thumb-five.jpg";
import NewImg6 from "../../images/news/post-thumb-six.jpg";
import SmThumb1 from "../../images/news/post-thumb-sm-one.jpg";
import SmThumb2 from "../../images/news/post-thumb-sm-two.jpg";
import SmThumb3 from "../../images/news/post-thumb-sm-three.jpg";
import SmThumb4 from "../../images/news/post-thumb-sm-four.jpg";
import { Link } from "react-router-dom";

import "../../scss/style.scss";

export default function NewsWithLeftSliderSection()
{
    return(
        <>
<section class="news section">
	<div class="container">
		<div class="row mt-30">
			<div class="col-lg-4 col-md-10 mx-auto">
				<div class="sidebar">

					<div class="widget search p-0">
						<div class="input-group">
						    <input type="text" class="form-control main m-0" id="expire" placeholder="Search..." />
						    <span class="input-group-addon"><i class="fa fa-search"></i></span>
					    </div>
					</div>

					<div class="widget category">
						<h5 class="widget-header">Categories</h5>
						<ul class="category-list m-0 p-0">
							<li><Link to="">Strategy Planning <span class="float-right">(6)</span></Link></li>
							<li><Link to="">Corporate Identity <span class="float-right">(9)</span></Link></li>
							<li><Link to="">Brand Creation<span class="float-right">(3)</span></Link></li>
							<li><Link to="">Entertainment<span class="float-right">(5)</span></Link></li>
							<li><Link to="">Conference<span class="float-right">(7)</span></Link></li>
						</ul>
					</div>
					<div class="widget latest-post">
						<h5 class="widget-header">Latest Post</h5>
						<div class="media">
							<img src={SmThumb1} class="img-fluid" alt="post-thumb" />
							<div class="media-body">
								<h6><Link to="">Nam hendrerit eros in ligula suscipit suscipit</Link></h6>
								<p href="/"><span class="fa fa-calendar"></span>02 Feb, 2017</p>
							</div>
						</div>
						
						<div class="media">
							<img src={SmThumb2} class="img-fluid" alt="post-thumb" />
							<div class="media-body">
								<h6><Link to="">Nam hendrerit eros in ligula suscipit suscipit</Link></h6>
								<p href="/"><span class="fa fa-calendar"></span>02 Feb, 2017</p>
							</div>
						</div>
						
						<div class="media">
							<img src={SmThumb3} class="img-fluid" alt="post-thumb" />
							<div class="media-body">
								<h6><Link to="">Nam hendrerit eros in ligula suscipit suscipit</Link></h6>
								<p href="/"><span class="fa fa-calendar"></span>02 Feb, 2017</p>
							</div>
						</div>
						
						<div class="media">
							<img src={SmThumb4} class="img-fluid" alt="post-thumb" />
							<div class="media-body">
								<h6><Link to="">Nam hendrerit eros in ligula suscipit suscipit</Link></h6>
								<p href="/"><span class="fa fa-calendar"></span>02 Feb, 2017</p>
							</div>
						</div>
					</div>
					
					<div class="widget tags">
						
						<h5 class="widget-header">Popular Tags</h5>
						<ul class="list-inline">
							<li class="list-inline-item"><Link to="/">Culture</Link></li>
							<li class="list-inline-item"><Link to="/">Social</Link></li>
							<li class="list-inline-item"><Link to="/">News</Link></li>
							<li class="list-inline-item"><Link to="/">Events</Link></li>
							<li class="list-inline-item"><Link to="/">Sports</Link></li>
							<li class="list-inline-item"><Link to="/">Music</Link></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-lg-8 col-md-10 mx-auto">
				<div class="block">
					<div class="row">
						<div class="col-md-6 col-sm-8 col-10 m-auto">
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
						<div class="col-md-6 col-sm-8 col-10 m-auto">
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
						<div class="col-md-6 m-md-auto col-sm-8 col-10 m-auto">
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
						<div class="col-md-6 col-sm-8 col-10 m-auto">
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
						<div class="col-md-6 col-sm-8 col-10 m-auto">
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
						<div class="col-md-6 m-md-auto col-sm-8 col-10 m-auto">
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
						<div class="col-10 m-auto col-sm-8">
							
							<nav>
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
			</div>
		</div>
	</div>
</section>
</>
);
}
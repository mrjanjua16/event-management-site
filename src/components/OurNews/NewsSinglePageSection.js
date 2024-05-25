import React from "react";
import NewImg3 from "../../images/speakers/speaker-thumb-one.jpg";
import NewImg4 from "../../images/speakers/speaker-thumb-two.jpg";
import NewImg5 from "../../images/speakers/speaker-thumb-three.jpg";
import SmThumb2 from "../../images/speakers/speaker-thumb-three.jpg";
import SmThumb3 from "../../images/speakers/speaker-thumb-three.jpg";
import SmThumb4 from "../../images/speakers/speaker-thumb-three.jpg";
import Post1 from "../../images/news/single-post.jpg";


import "../../scss/style.scss";

export default function NewsSinglePageSection()
{
    return(
        <>
<section class="news section">
	<div class="container">
		<div class="row mt-30">
			<div class="col-lg-8 col-md-10 mx-auto">
				<div class="block">
					<article class="blog-post single">
						<div class="post-thumb">
							<img src={Post1} alt="post-image" class="img-fluid" />
						</div>
						<div class="post-content">
							<div class="date">
								<h4>20<span>May</span></h4>
							</div>
							<div class="post-title">
								<h3>Elementum purus id ultrices.</h3>
							</div>
							<div class="post-meta">
								<ul class="list-inline">
									<li class="list-inline-item">
										<i class="fa fa-user-o"></i>
										<a href="#">Admin</a>
									</li>
									<li class="list-inline-item">
										<i class="fa fa-heart-o"></i>
										<a href="#">350</a>
									</li>
									<li class="list-inline-item">
										<i class="fa fa-comments-o"></i>
										<a href="#">30</a>
									</li>
								</ul>
							</div>
							<div class="post-details">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud.laboris nisi ut aliquip ex ea commodo conse
									quat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
								</p>
								<p>
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
								</p>
								<p>
									Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.
 									quaerat voluptatem.
								</p>
								<div class="quotes">
									<blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud.laboris nisi ut aliquip ex ea commodo consequat. </blockquote>
								</div>
								<p>
									Amet consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud.laboris nisi ut aliquip ex ea commodo conse
								</p>
								<div class="share-block">
									<div class="tag">
										<p>
											Tags: 
										</p>
										<ul class="list-inline">
											<li class="list-inline-item">
												<a href="#">Event,</a>
											</li>
											<li class="list-inline-item">
												<a href="#">Conference,</a>
											</li>
											<li class="list-inline-item">
												<a href="#">Business</a>
											</li>
										</ul>
									</div>
									<div class="share">
										<p>
											Share: 
										</p>
										<ul class="social-links-share list-inline">
							              <li class="list-inline-item">
							                <a href="#"><i class="fa fa-facebook"></i></a>
							              </li>
							              <li class="list-inline-item">
							                <a href="#"><i class="fa fa-twitter"></i></a>
							              </li>
							              <li class="list-inline-item">
							                <a href="#"><i class="fa fa-instagram"></i></a>
							              </li>
							              <li class="list-inline-item">
							                <a href="#"><i class="fa fa-rss"></i></a>
							              </li>
							              <li class="list-inline-item">
							                <a href="#"><i class="fa fa-vimeo"></i></a>
							              </li>
							            </ul>
									</div>
								</div>
							</div>
						</div>
					</article>
					<div class="comments">
						<h5>Comments (3)</h5>
						<div class="media comment">
							<img src={NewImg3} alt="image" />
							<div class="media-body">
								<h6>Jessica Brown</h6>
								<ul class="list-inline">
									<li class="list-inline-item"><span class="fa fa-calendar"></span>Mar 20, 2016</li>
									<li class="list-inline-item"><a href="#">Reply</a></li>
								</ul>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant tota rem ape riamipsa eaque  quae nisi ut aliquip commodo consequat. 
								</p>

								<div class="media comment">
									<img src={NewImg4} alt="image" />
									<div class="media-body">
										<h6>Jonathan Doe</h6>
										<ul class="list-inline">
											<li class="list-inline-item"><span class="fa fa-calendar"></span>Mar 20, 2016</li>
										</ul>
										<p>
											Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant tota rem ape riamipsa eaque  quae nisi 
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="media comment">
							<img src={NewImg5} alt="image" />
							<div class="media-body">
								<h6>Adam Smith</h6>
								<ul class="list-inline">
									<li class="list-inline-item"><span class="fa fa-calendar"></span>Mar 20, 2016</li>
									<li class="list-inline-item"><a href="#">Reply</a></li>
								</ul>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudant tota rem ape riamipsa eaque  quae nisi ut aliquip commodo consequat. 
								</p>
							</div>
						</div>
					</div>
					<div class="comment-form">
						<h5>Leave A Comment</h5>
						<form action="#" class="row">
							<div class="col-12">
								<textarea class="form-control main" name="comment" id="comment" rows="10" placeholder="Your Review"></textarea>
							</div>
							<div class="col-md-6">
								<input type="text" class="form-control main" name="text" id="name" placeholder="Your Name" />
							</div>
							<div class="col-md-6">
								<input type="email" class="form-control main" name="email" id="email" placeholder="Your Email" />
							</div>
							<div class="col-12">
								<button class="btn btn-main-md" type="submit">Submit Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
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
							<li><a href="">Strategy Planning <span class="float-right">(6)</span></a></li>
							<li><a href="">Corporate Identity <span class="float-right">(9)</span></a></li>
							<li><a href="">Brand Creation<span class="float-right">(3)</span></a></li>
							<li><a href="">Entertainment<span class="float-right">(5)</span></a></li>
							<li><a href="">Conference<span class="float-right">(7)</span></a></li>
						</ul>
					</div>
					<div class="widget latest-post">
						<h5 class="widget-header">Latest Post</h5>
						<div class="media">
							<img src={SmThumb3} class="img-fluid" alt="post-thumb" />
							<div class="media-body">
								<h6><a href="">Nam hendrerit eros in ligula suscipit suscipit</a></h6>
								<p href="#"><span class="fa fa-calendar"></span>02 Feb, 2017</p>
							</div>
						</div>
						
						<div class="media">
							<img src={SmThumb2} class="img-fluid" alt="post-thumb" />
							<div class="media-body">
								<h6><a href="">Nam hendrerit eros in ligula suscipit suscipit</a></h6>
								<p href="#"><span class="fa fa-calendar"></span>02 Feb, 2017</p>
							</div>
						</div>
						
						<div class="media">
							<img src={SmThumb3} class="img-fluid" alt="post-thumb" />
							<div class="media-body">
								<h6><a href="">Nam hendrerit eros in ligula suscipit suscipit</a></h6>
								<p href="#"><span class="fa fa-calendar"></span>02 Feb, 2017</p>
							</div>
						</div>
						
						<div class="media">
							<img src={SmThumb4} class="img-fluid" alt="post-thumb" />
							<div class="media-body">
								<h6><a href="">Nam hendrerit eros in ligula suscipit suscipit</a></h6>
								<p href="#"><span class="fa fa-calendar"></span>02 Feb, 2017</p>
							</div>
						</div>
					</div>
					<div class="widget tags">

						<h5 class="widget-header">Popular Tags</h5>
						<ul class="list-inline">
							<li class="list-inline-item"><a href="#">Culture</a></li>
							<li class="list-inline-item"><a href="#">Social</a></li>
							<li class="list-inline-item"><a href="#">News</a></li>
							<li class="list-inline-item"><a href="#">Events</a></li>
							<li class="list-inline-item"><a href="#">Sports</a></li>
							<li class="list-inline-item"><a href="#">Music</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </>
    );
}
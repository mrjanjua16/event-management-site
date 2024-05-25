import React from "react";
import '../../scss/style.scss';
import speaker1 from '../../images/speakers/speaker-one.jpg';
import speaker2 from '../../images/speakers/speaker-two.jpg';
import speaker3 from '../../images/speakers/speaker-three.jpg';
import speaker4 from '../../images/speakers/speaker-four.jpg';
import speaker5 from '../../images/speakers/speaker-five.jpg';
import speaker6 from '../../images/speakers/speaker-six.jpg';
import { Link } from "react-router-dom";

export default function Speakers()
{
    return(
<section class="section speakers white">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Who <span class="alternate">Speaking?</span></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src={speaker1} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><i class="fa fa-facebook"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-twitter"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-linkedin"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-pinterest"></i></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/NewsSinglePage">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src={speaker2} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><i class="fa fa-facebook"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-twitter"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-linkedin"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-pinterest"></i></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/NewsSinglePage">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src={speaker3} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><i class="fa fa-facebook"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-twitter"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-linkedin"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-pinterest"></i></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/NewsSinglePage">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src={speaker4} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><i class="fa fa-facebook"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-twitter"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-linkedin"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-pinterest"></i></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/NewsSinglePage">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src={speaker5} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><i class="fa fa-facebook"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-twitter"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-linkedin"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-pinterest"></i></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/NewsSinglePage">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src={speaker5} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><i class="fa fa-facebook"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-twitter"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-linkedin"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-pinterest"></i></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/NewsSinglePage">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src={speaker4} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><i class="fa fa-facebook"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-twitter"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-linkedin"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-pinterest"></i></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/NewsSinglePage">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				<div class="speaker-item">
					<div class="image">
						<img src={speaker6} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><i class="fa fa-facebook"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-twitter"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-linkedin"></i></Link></li>
								<li class="list-inline-item"><Link to="/"><i class="fa fa-pinterest"></i></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/NewsSinglePage">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    );
}
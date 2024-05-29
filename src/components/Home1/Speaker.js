import '../../scss/style.scss';
import speaker1 from '../../images/speakers/speaker-one.jpg';
import speaker2 from '../../images/speakers/speaker-two.jpg';
import speaker3 from '../../images/speakers/speaker-three.jpg';
import speaker4 from '../../images/speakers/speaker-four.jpg';
import speaker5 from '../../images/speakers/speaker-five.jpg';
import speaker6 from '../../images/speakers/speaker-six.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';


export default function Speaker(){
    return(
        <>
<section class="section speakers bg-speaker overlay-lighter">
	    <div class="container">
		<div class="row">
			<div class="col-12">
				{
                //<!-- Section Title -->
                }
				<div class="section-title white">
					<h3>Who <span class="alternate">Speaking?</span></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusm tempor incididunt ut labore</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3 col-md-4 col-sm-6">
				{
                //<!-- Speaker 1 -->
                }
				<div class="speaker-item">
					<div class="image">
						<img src={speaker1} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-facebook" icon={faSquareFacebook}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-twitter" icon={faSquareTwitter}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-linkedin" icon={faLinkedin}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-pinterest" icon={faPinterest}></FontAwesomeIcon></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/SpeakerDetail">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				{
                //<!-- Speaker 2 -->
                }
				<div class="speaker-item">
					<div class="image">
						<img src={speaker2} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-facebook" icon={faSquareFacebook}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-twitter" icon={faSquareTwitter}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-linkedin" icon={faLinkedin}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-pinterest" icon={faPinterest}></FontAwesomeIcon></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/SpeakerDetail">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				{
                //<!-- Speaker 3 -->
                }
				<div class="speaker-item">
					<div class="image">
						<img src={speaker3} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-facebook" icon={faSquareFacebook}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-twitter" icon={faSquareTwitter}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-linkedin" icon={faLinkedin}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-pinterest" icon={faPinterest}></FontAwesomeIcon></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/SpeakerDetail">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				{
                //<!-- Speaker 4 -->
                }
				<div class="speaker-item">
					<div class="image">
						<img src={speaker4} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-facebook" icon={faSquareFacebook}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-twitter" icon={faSquareTwitter}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-linkedin" icon={faLinkedin}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-pinterest" icon={faPinterest}></FontAwesomeIcon></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/SpeakerDetail">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				{
                //<!-- Speaker 5 -->
                }
				<div class="speaker-item">
					<div class="image">
						<img src={speaker5} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-facebook" icon={faSquareFacebook}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-twitter" icon={faSquareTwitter}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-linkedin" icon={faLinkedin}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-pinterest" icon={faPinterest}></FontAwesomeIcon></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/SpeakerDetail">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				{
                //<!-- Speaker 6 -->
                }
				<div class="speaker-item">
					<div class="image">
						<img src={speaker6} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-facebook" icon={faSquareFacebook}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-twitter" icon={faSquareTwitter}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-linkedin" icon={faLinkedin}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-pinterest" icon={faPinterest}></FontAwesomeIcon></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/SpeakerDetail">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				{
                //<!-- Speaker 7 -->
                }
				<div class="speaker-item">
					<div class="image">
						<img src={speaker5} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-facebook" icon={faSquareFacebook}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-twitter" icon={faSquareTwitter}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-linkedin" icon={faLinkedin}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-pinterest" icon={faPinterest}></FontAwesomeIcon></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/SpeakerDetail">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4 col-sm-6">
				{
                //<!-- Speaker 8 -->
                }
				<div class="speaker-item">
					<div class="image">
						<img src={speaker6} alt="speaker" class="img-fluid" />
						<div class="primary-overlay"></div>
						<div class="socials">
							<ul class="list-inline">
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-facebook" icon={faSquareFacebook}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-twitter" icon={faSquareTwitter}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-linkedin" icon={faLinkedin}></FontAwesomeIcon></Link></li>
								<li class="list-inline-item"><Link to="/"><FontAwesomeIcon class="fa fa-pinterest" icon={faPinterest}></FontAwesomeIcon></Link></li>
							</ul>
						</div>
					</div>
					<div class="content text-center">
						<h5><Link to="/SpeakerDetail">Johnathan Franco</Link></h5>
						<p>Project Manager</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </>
    );
}
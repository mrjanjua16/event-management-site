import React from "react";
import "../../scss/style.scss";
import SingleSpeaker from "../../images/speakers/single-speaker.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareTwitter, faLinkedin, faPinterest, faSkype} from '@fortawesome/free-brands-svg-icons';

export default function SpeakerDesSection()
{
    return(
<section class="section single-speaker">
	<div class="container">
		<div class="block">
			<div class="row">
				<div class="col-lg-5 col-md-6 align-self-md-center">
					<div class="image-block">
						<img src={SingleSpeaker} class="img-fluid" alt="speaker" />
					</div>
				</div>
				<div class="col-lg-7 col-md-6 align-self-center">
					<div class="content-block">
						<div class="name">
							<h3>Jonathan Franco</h3>
						</div>
						<div class="profession">
							<p>Web Developer</p>
						</div>
						<div class="details">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud.laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
							Duis aute irure dolor in reprehenderit in voluptate velit esse.
							<br />
							</p>
							<p>
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
							<br /> 
							Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
						</div>
						<div class="social-profiles">
							<h5>Social Profiles</h5>
							<ul class="list-inline social-list">
								<li class="list-inline-item">
									<Link to="/"><FontAwesomeIcon class="fa fa-facebook" icon={faSquareFacebook}></FontAwesomeIcon></Link>
								</li>
								<li class="list-inline-item">
									<Link to="/"><FontAwesomeIcon class="fa fa-skype" icon={faSkype}></FontAwesomeIcon></Link>
								</li>
								<li class="list-inline-item">
									<Link to="/"><FontAwesomeIcon class="fa fa-twitter" icon={faSquareTwitter}></FontAwesomeIcon></Link>
								</li>
								<li class="list-inline-item">
									<Link to="/"><FontAwesomeIcon class="fa fa-linkedin" icon={faLinkedin}></FontAwesomeIcon></Link>
								</li>
								<li class="list-inline-item">
									<Link to="/"><FontAwesomeIcon class="fa fa-pinterest" icon={faPinterest}></FontAwesomeIcon></Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="block-2">
			<div class="row">
				<div class="col-md-6">
					<div class="personal-info">
						<h5>Personal Information</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi explicabo suscipit deleniti voluptatum quos nostrum iure doloremque cupiditate voluptatem a enim eaque quod perspiciatis repudiandae, mollitia adipisci ea, quidem eveniet consequatur veniam error. Adipisci, suscipit corporis repellat, soluta vitae deserunt perspiciatis labore reprehenderit sapiente provident vel maxime.</p>
						<ul class="m-0 p-0">
							<li>Morbi fermentum felis nec</li>
							<li>Fermentum felis nec gravida tempus.</li>
							<li>Morbi fermentum felis nec</li>
							<li>Fermentum felis nec gravida tempus.</li>
							<li>Morbi fermentum felis nec</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6">
					<div class="skills">
						<h5>Personal Skills</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis repellat inventore at praesentium perspiciatis labore reprehenderit sapiente provident vel maxime.</p>
						<div class="skill-bars">
							
							<div class="skill-bar">
								
								<p>Wordpress</p>
								
								<div class="progress">
								  <div class="progress-bar" role="progressbar" style={{width: "90%"}}><span>90%</span></div>
								</div>
							</div>
							
							<div class="skill-bar">
								
								<p>PHP</p>
								
								<div class="progress">
								  <div class="progress-bar" role="progressbar" style={{width: "75%"}}>
								  	<span>75%</span>
								  </div>
								</div>
							</div>
							
							<div class="skill-bar">
								
								<p>Javascript</p>
								
								<div class="progress">
								  <div class="progress-bar" role="progressbar" style={{width: "60%"}}>
								  	<span>60%</span>
								  </div>
								</div>
							</div>
							
							<div class="skill-bar">
								
								<p>HTML</p>
								
								<div class="progress">
								  <div class="progress-bar" role="progressbar" style={{width: "80%"}}>
								  	<span>80%</span>
								  </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    );
}
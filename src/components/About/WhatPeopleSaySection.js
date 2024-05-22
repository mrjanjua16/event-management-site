import React from "react";
import "../../scss/style.scss";
import SpeakerThumb1 from "../../images/speakers/speaker-thumb-one.jpg";
import SpeakerThumb2 from "../../images/speakers/speaker-thumb-two.jpg";
import SpeakerThumb3 from "../../images/speakers/speaker-thumb-three.jpg";
import SpeakerThumb4 from "../../images/speakers/speaker-thumb-four.jpg";

export default function WhatPeopleSay()
{
    return(
<section class="section testimonial">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>What People <span class="alternate">Say?</span></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti aliquid vero harum rerum voluptates, ab, ullam.</p>
				</div>
			</div>
		</div>
		<div class="row mt-20">
			<div class="col-lg-4 col-md-6">
				<div class="testimonial-item">
					<div class="comment">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptate modi sunt placeat in vel illo dolorem, atque maxime voluptates optio fugit iure cum ipsa quo quaerat! Veritatis, modi. Laudantium provident deleniti earum voluptas delectus, labore dolor dolorem amet expedita.</p>
					</div>
					<div class="person">
						<div class="media">
							<img src={SpeakerThumb3} alt="person-image" />
							<div class="media-body">
								<div class="name"><p>Espen Brunberg</p></div>
								<div class="profession"><p>Web Developer</p></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">

				<div class="testimonial-item">
					
					<div class="comment">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptate modi sunt placeat in vel illo dolorem, atque maxime voluptates optio fugit iure cum ipsa quo quaerat! Veritatis, modi. Laudantium provident deleniti earum voluptas delectus, labore dolor dolorem amet expedita.</p>
					</div>
					<div class="person">
						<div class="media">

							<img src={SpeakerThumb1} alt="person-image" />
							<div class="media-body">

								<div class="name"><p>Kaite Stricker</p></div>

								<div class="profession"><p>Designer</p></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mx-auto">
				<div class="testimonial-item">
					<div class="comment">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptate modi sunt placeat in vel illo dolorem, atque maxime voluptates optio fugit iure cum ipsa quo quaerat! Veritatis, modi. Laudantium provident deleniti earum voluptas delectus, labore dolor dolorem amet expedita.</p>
					</div>
					<div class="person">
						<div class="media">
							<img src={SpeakerThumb2} alt="person-image" />
							<div class="media-body">
								<div class="name"><p>Adam Smith</p></div>
								<div class="profession"><p>Web Developer</p></div>
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
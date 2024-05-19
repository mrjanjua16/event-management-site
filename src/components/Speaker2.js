import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SpeakerImage1 from "../images/speakers/speaker-full-two.jpg";
import SpeakerImage2 from "../images/speakers/speaker-full-two.jpg";
import "../scss/style.scss";

export default function Speaker2() {
  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
  };

  return (
      <div className="slider-container">
        <section class="speakers-full-width">
	      <div class="container-fluid p-0">
        <div class="row">
			  <div class="col-12">
        <Slider {...settings}>
        <div class="speaker-slider slick-initialized slick-slider">
        <button class="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>Previous</button>
          <div class="slick-list draggable" style="padding: 0px 50px;">
					<div class="slick-track" style="opacity: 1; width: 10728px; transform: translate3d(-3129px, 0px, 0px);">
					<div class="speaker-image slick-slide slick-cloned" data-slick-index="-4" id="" aria-hidden="true" tabindex="-1" style="width: 447px;">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          </div>
          </div>
          </div>
          <button class="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>Next</button>
          </div>
        </Slider>
        </div>
        </div>
        </div>
        </section>
      </div>
  );
}

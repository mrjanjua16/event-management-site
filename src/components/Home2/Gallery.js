import React from "react";
import "../../scss/style.scss";
import Gallery1 from "../../images/gallery/gallery-full-one.jpg";
import Gallery2 from "../../images/gallery/gallery-full-two.jpg";
import Gallery3 from "../../images/gallery/gallery-full-three.jpg";
import Gallery4 from "../../images/gallery/gallery-full-four.jpg";
import Gallery5 from "../../images/gallery/gallery-full-five.jpg";
import Gallery6 from "../../images/gallery/gallery-full-six.jpg";
import Gallery7 from "../../images/gallery/gallery-full-seven.jpg";
import Gallery8 from "../../images/gallery/gallery-full-eight.jpg";

export default function Gallery()
{
    return(
        <>
            <section class="gallery-full section pb-0">
	<div class="container-fluid p-0">
		<div class="row">
			<div class="col-12">
				<div class="section-title">
					<h3>Eventre <span class="alternate">Gallery</span></h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, autem.</p>
				</div>
			</div>
		</div>
		<div class="row no-gutters">
			<div class="col-lg-3 col-md-4">
				<div class="image">
					<img src={Gallery1} alt="gallery-image" class="img-fluid" />
					<div class="primary-overlay">
						<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-one.jpg"><i class="fa fa-picture-o"></i></a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4">
				<div class="image">
					<img src={Gallery2} alt="gallery-image" class="img-fluid" />
					<div class="primary-overlay">
						<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-two.jpg"><i class="fa fa-picture-o"></i></a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4">
				<div class="image">
					<img src={Gallery3} alt="gallery-image" class="img-fluid" />
					<div class="primary-overlay">
						<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-three.jpg"><i class="fa fa-picture-o"></i></a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4">
				<div class="image">
					<img src={Gallery4} alt="gallery-image" class="img-fluid" />
					<div class="primary-overlay">
						<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-four.jpg"><i class="fa fa-picture-o"></i></a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4">
				<div class="image">
					<img src={Gallery5} alt="gallery-image" class="img-fluid" />
					<div class="primary-overlay">
						<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-five.jpg"><i class="fa fa-picture-o"></i></a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4">
				<div class="image">
					<img src={Gallery6} alt="gallery-image" class="img-fluid" />
					<div class="primary-overlay">
						<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-six.jpg"><i class="fa fa-picture-o"></i></a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4">
				<div class="image">
					<img src={Gallery7} alt="gallery-image" class="img-fluid" />
					<div class="primary-overlay">
						<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-sven.jpg"><i class="fa fa-picture-o"></i></a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-4">
				<div class="image">
					<img src={Gallery8} alt="gallery-image" class="img-fluid" />
					<div class="primary-overlay">
						<a class="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-full-popup-eight.jpg"><i class="fa fa-picture-o"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </>
    );
}
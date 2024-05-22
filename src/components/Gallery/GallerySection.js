import React from "react";
import "../../scss/style.scss";

export default function GallerySection()
{
    return(
<section class="page-title bg-title overlay-dark">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<div class="title">
					<h3>Our Gallery</h3>
				</div>
				<ol class="breadcrumb justify-content-center p-0 m-0">
				  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
				  <li class="breadcrumb-item active">Our Gallery</li>
				</ol>
			</div>
		</div>
	</div>
</section>
    );
}
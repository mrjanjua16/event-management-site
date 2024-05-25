import React from "react";
import "../../scss/style.scss";
import { Link } from "react-router-dom";

export default function AboutSection()
{
    return(
<section class="page-title bg-title overlay-dark">
	<div class="container">
		<div class="row">
			<div class="col-12 text-center">
				<div class="title">
					<h3>About Us</h3>
				</div>
				<ol class="breadcrumb justify-content-center p-0 m-0">
				  <li class="breadcrumb-item"><Link to="/">Home</Link></li>
				  <li class="breadcrumb-item active">About US</li>
				</ol>
			</div>
		</div>
	</div>
</section>
    );
}
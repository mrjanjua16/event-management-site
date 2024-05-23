import React from "react";
import "../../scss/style.scss";
import ErrorImg from "../../images/404.png";
import { Link } from "react-router-dom";

export default function ErrorSection()
{
    return(
<section class="section error">
	<div class="container">
		<div class="row">
			<div class="col-md-6 m-auto">
				<div class="block text-center">
					<img src={ErrorImg} class="img-fluid" alt="404" />
					<h3>Oops!... <span>Page Not Found.</span></h3>
					<Link to="/" class="btn btn-main-md">Go to home</Link>
				</div>
			</div>
		</div>
	</div>
</section>
    );
}
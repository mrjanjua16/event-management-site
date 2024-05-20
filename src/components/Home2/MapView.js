import React from "react";
import "../../scss/style.scss";

export default function MapView()
{
    return(
        <>
<section class="map new">
        <div class="containerMap">
        <div class="address-block">
		<h4>Docklands Convention</h4>
		<ul class="address-list p-0 m-0">
			<li><i class="fa fa-home"></i><span>1201 Park Street, Fifth Avenue, Dhanmondy, Dhaka.</span></li>
			<li><i class="fa fa-phone"></i><span>[88] 657 524 332</span></li>
		</ul>
		<a href="contact.html" class="btn btn-white-md">Get Direction</a>
	    </div>
        </div>
	
    <div class="containerMap">
	<div class="register overlay-dark bg-registration-two">
		<div class="block">
			<div class="title text-center">
				<h3>Register to <span class="alternate">Eventre</span></h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
			</div>
			<form action="#" class="row">
				<div class="col-md-6">
					<input type="text" class="form-control main" placeholder="Your Name" />
				</div>
				<div class="col-md-6">
					<input type="email" class="form-control main" placeholder="Email" />
				</div>
				<div class="col-md-6">
					<input type="text" class="form-control main" placeholder="Phone" />
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<select class="form-control main" id="select-ticket">
							<option>Ticket Type</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>
					</div>
				</div>
				<div class="col-12 text-center">
					<button type="submit" class="btn btn-white-md">Register Now</button>
				</div>
			</form>
		</div>
	</div>
    </div>
</section>
        </>
    );
}
import React from "react";
import "../../scss/style.scss";
import { Link } from "react-router-dom";

export default function TicketFeature()
{
    return(
        <>
<section class="ticket-feature">
	<div class="container-fluid m-0 p-0">
		<div class="row p-0 m-0">
			<div class="col-lg-7 p-0 m-0">
				<div class="block bg-timer overlay-dark text-center">
					<div class="section-title white m-0">
						<h3>Limited Audience <span class="alternate">Seats</span></h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm</p>
					</div>
					<div class="timer syotimer"><div class="syotimer__head"></div><div class="syotimer__body">
                        <p style={{fontSize: "1.2em"}}>The countdown is finished!</p></div><div class="syotimer__footer"></div></div>
					<Link to="/Contact" class="btn btn-main-md">Buy Ticket</Link>
				</div>
			</div>
			<div class="col-lg-5 p-0">
				<div class="block-2">
					<div class="row no-gutters">
						<div class="col-6">
							
							<div class="service-item">
								<i class="fa fa-microphone"></i>
								<h5>8 Speakers</h5>
							</div>
						</div>
						<div class="col-6">
							
							<div class="service-item">
								<i class="fa fa-flag"></i>
								<h5>500 + Seats</h5>
							</div>
						</div>
						<div class="col-6">
							
							<div class="service-item">
								<i class="fa fa-ticket"></i>
								<h5>300 tickets</h5>
							</div>
						</div>
						<div class="col-6">
							
							<div class="service-item">
								<i class="fa fa-calendar"></i>
								<h5>3 days event</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </>
    );
}
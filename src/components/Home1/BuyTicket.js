import '../../scss/style.scss';
import SpeakerTicket from '../../images/speakers/speaker-ticket.png';

export default function BuyTicket()
{
    return(
<>
<section class="cta-ticket bg-ticket overlay-dark">
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<div class="content-block">
					<h2>Get Ticket <span class="alternate">Now!</span></h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmtempor incidi</p>
					<a href="/" class="btn btn-main-md">Buy ticket</a>
				</div>
			</div>
		</div>
	</div>
	<div class="image-block"><img src={SpeakerTicket} alt="" class="img-fluid" /></div>
</section>
</>
);
}
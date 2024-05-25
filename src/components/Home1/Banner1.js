import '../../scss/style.scss';
import { Link } from 'react-router-dom';

export default function banner1()
{
    return(
<>
<section class="banner bg-banner-one overlay">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				{
                //<!-- Content Block -->
                }
				<div class="block">
					{
                    // <!-- Coundown Timer -->
                    }
					<div class="timer syotimer"><div class="syotimer__head"></div>
					<div class="syotimer__body">
					<p style={{ fontSize: '1.2em' }}>The countdown is finished!</p>
						</div><div class="syotimer__footer"></div>
					</div>
					<h1>Business</h1>
					<h2>Conference 2017</h2>
					<h6>02-05 July 2017 California</h6>
					{
                    // <!-- Action Button -->
                    }
					<Link to="/Contact" class="btn btn-white-md">get ticket now</Link>
				</div>
			</div>
		</div>
	</div>
</section>
</>
);
}
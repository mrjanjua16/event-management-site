import { Link } from "react-router-dom";
import "../../scss/style.scss";

export default function Banner2()
{
    return(
        <>
<section class="banner-two bg-banner-two overlay-white-slant text-overlay">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<div class="block">
					<h1>Business</h1>
					<h2>Conference</h2>
					<h3>2017</h3>
					<h6>02-05 July 2017 California</h6>
					<Link href="/" class="btn btn-main-md">get ticket now</Link>
				</div>
			</div>
		</div>
	</div>
</section>
        </>
);
}
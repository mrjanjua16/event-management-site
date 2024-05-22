import "../../scss/style.scss";

export default function Map()
{
    return(
        <>
        <section class="Map">
        <div style={{position: "relative", overflow: "hidden"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13304.178364386507!2d73.08273898662651!3d33.526226261713866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed491ac52dcb%3A0x5aa460d843976644!2sBahria%20Intellectual%20Village%20Bahria%20Town%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716030705839!5m2!1sen!2s"
            width="100%" height="480px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="address-block">
		<h4>Docklands Convention</h4>
		<ul class="address-list p-0 m-0">
			<li><i class="fa fa-home"></i><span>Street Address, Location, City, Country.</span></li>
			<li><i class="fa fa-phone"></i><span>[00] 000 000 000</span></li>
		</ul>
		<a href="/" class="btn btn-white-md">Get Direction</a>
	    </div>
        </section>
        </>
    );
}
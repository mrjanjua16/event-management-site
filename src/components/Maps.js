import "../scss/style.scss";
import "../scss/pages/_maps.scss";

export default function Maps(){
	return(
		<>
<section class="map">
    <div id="map" data-latitude="40.712776" data-longitude="-74.005974" data-marker="images/icon/marker.png" data-marker-name="Eventre">
    </div>
    <div class="address-block">
        <h4>Docklands Convention</h4>
        <ul class="address-list p-0 m-0">
            <li><i class="fa fa-home"></i><span>Street Address, Location, City, Country.</span></li>
            <li><i class="fa fa-phone"></i><span>[00] 000 000 000</span></li>
        </ul>
        <a href="#" class="btn btn-white-md">Get Direction</a>
    </div>
</section>
		</>
);
}
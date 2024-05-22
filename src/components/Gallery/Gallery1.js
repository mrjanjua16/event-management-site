import React from "react";
import "../../scss/style.scss";
import "./gallery.scss"; // Import the new SCSS file

import GalleryLess1 from "../../images/gallery/gallery-less-one.jpg";
import GalleryLess2 from "../../images/gallery/gallery-less-two.jpg";
import GalleryLess3 from "../../images/gallery/gallery-less-three.jpg";
import GalleryLess4 from "../../images/gallery/gallery-less-four.jpg";
import GalleryLess5 from "../../images/gallery/gallery-less-five.jpg";
import GalleryLess6 from "../../images/gallery/gallery-less-six.jpg";

export default function Gallery1() {
    return (
        <section className="section gallery">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="controls">
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn active">
                                    <input type="radio" name="gallery-filter" value="all" defaultChecked />All
                                </label>
                                <label className="btn">
                                    <input type="radio" name="gallery-filter" value="conference" />Conference
                                </label>
                                <label className="btn">
                                    <input type="radio" name="gallery-filter" value="meeting" />Meeting
                                </label>
                                <label className="btn">
                                    <input type="radio" name="gallery-filter" value="events" />Events
                                </label>
                                <label className="btn">
                                    <input type="radio" name="gallery-filter" value="party" />Party
                                </label>
                                <label className="btn">
                                    <input type="radio" name="gallery-filter" value="concert" />Concert
                                </label>
                            </div>
                        </div>
                        <div className="gallery-wrapper row less-gutter shuffle">
                            <div className="gallery-item col-lg-3 col-md-6 shuffle-item shuffle-item--visible" data-groups='["meeting"]'>
                                <div className="image-block">
                                    <div className="image">
                                        <img src={GalleryLess1} alt="gallery-image" className="img-fluid" />
                                        <div className="primary-overlay">
                                            <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-one.jpg">
                                                <i className="fa fa-picture-o"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-item col-lg-3 col-md-6 shuffle-item shuffle-item--visible" data-groups='["party","events"]'>
                                <div className="image-block">
                                    <div className="image">
                                        <img src={GalleryLess2} alt="gallery-image" className="img-fluid" />
                                        <div className="primary-overlay">
                                            <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-two.jpg">
                                                <i className="fa fa-picture-o"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Repeat for other gallery items */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

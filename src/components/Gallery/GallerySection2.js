import React from "react";
import "../../scss/style.scss";

import GalleryLess1 from "../../images/gallery/gallery-less-one.jpg";
import GalleryLess2 from "../../images/gallery/gallery-less-two.jpg";
import GalleryLess3 from "../../images/gallery/gallery-less-three.jpg";
import GalleryLess4 from "../../images/gallery/gallery-less-four.jpg";
import GalleryLess5 from "../../images/gallery/gallery-less-five.jpg";
import GalleryLess6 from "../../images/gallery/gallery-less-six.jpg";

export default function GallerySection2()
{
    return(
<section className="section gallery">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="controls">
          <div className="btn-group btn-group-toggle d-block" data-toggle="buttons">
            <label className="btn active">
              <input type="radio" name="gallery-filter" defaultValue="all" defaultChecked="checked" />All
            </label>
            <label className="btn">
              <input type="radio" name="gallery-filter" defaultValue="conference" />Conference
            </label>
            <label className="btn">
              <input type="radio" name="gallery-filter" defaultValue="meeting" />Meeting
            </label>
            <label className="btn">
              <input type="radio" name="gallery-filter" defaultValue="events" />Events
            </label>
            <label className="btn">
              <input type="radio" name="gallery-filter" defaultValue="party" />Party
            </label>
            <label className="btn">
              <input type="radio" name="gallery-filter" defaultValue="concert" />Concert
            </label>
          </div>
        </div>
        <div className="gallery-wrapper row less-gutter shuffle" style={{position: 'relative', overflow: 'hidden', height: '570px', transition: 'height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s'}}>
          <div className="gallery-item col-lg-3 col-md-6 shuffle-item shuffle-item--visible" data-groups="[&quot;meeting&quot;]" style={{position: 'absolute', top: '0px', left: '0px', visibility: 'visible', willChange: 'transform', opacity: 1, transitionDuration: '250ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionProperty: 'transform, opacity'}}>
            <div className="image-block">
              <div className="image">
                <img src={GalleryLess1} alt="gallery-image" className="img-fluid" />
                <div className="primary-overlay">
                  <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-one.jpg"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-item col-lg-3 col-md-6 shuffle-item shuffle-item--visible" data-groups="[&quot;party&quot;,&quot;events&quot;]" style={{position: 'absolute', top: '0px', left: '0px', visibility: 'visible', willChange: 'transform', opacity: 1, transform: 'translate(285px, 0px) scale(1)', transitionDuration: '250ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionProperty: 'transform, opacity'}}>
            <div className="image-block">
              <div className="image">
                <img src={GalleryLess2} alt="gallery-image" className="img-fluid" />
                <div className="primary-overlay">
                  <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-two.jpg"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-item col-lg-3 col-md-6 shuffle-item shuffle-item--visible" data-groups="[&quot;meeting&quot;,&quot;party&quot;]" style={{position: 'absolute', top: '0px', left: '0px', visibility: 'visible', willChange: 'transform', opacity: 1, transform: 'translate(570px, 0px) scale(1)', transitionDuration: '250ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionProperty: 'transform, opacity'}}>
            <div className="image-block">
              <div className="image">
                <img src={GalleryLess3} alt="gallery-image" className="img-fluid" />
                <div className="primary-overlay">
                  <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-three.jpg"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-item col-lg-3 col-md-6 shuffle-item shuffle-item--visible" data-groups="[&quot;conference&quot;,&quot;concert&quot;]" style={{position: 'absolute', top: '0px', left: '0px', visibility: 'visible', willChange: 'transform', opacity: 1, transform: 'translate(855px, 0px) scale(1)', transitionDuration: '250ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionProperty: 'transform, opacity'}}>
            <div className="image-block">
              <div className="image">
                <img src={GalleryLess4} alt="gallery-image" className="img-fluid" />
                <div className="primary-overlay">
                  <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-four.jpg"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-item col-lg-3 col-md-6 shuffle-item shuffle-item--visible" data-groups="[&quot;concert&quot;,&quot;party&quot;]" style={{position: 'absolute', top: '0px', left: '0px', visibility: 'visible', willChange: 'transform', opacity: 1, transform: 'translate(0px, 285px) scale(1)', transitionDuration: '250ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionProperty: 'transform, opacity'}}>
            <div className="image-block">
              <div className="image">
                <img src={GalleryLess5} alt="gallery-image" className="img-fluid" />
                <div className="primary-overlay">
                  <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-five.jpg"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-item col-lg-3 col-md-6 shuffle-item shuffle-item--visible" data-groups="[&quot;events&quot;,&quot;conference&quot;]" style={{position: 'absolute', top: '0px', left: '0px', visibility: 'visible', willChange: 'transform', opacity: 1, transform: 'translate(285px, 285px) scale(1)', transitionDuration: '250ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionProperty: 'transform, opacity'}}>
            <div className="image-block">
              <div className="image">
                <img src={GalleryLess6} alt="gallery-image" className="img-fluid" />
                <div className="primary-overlay">
                  <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-six.jpg"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-item col-lg-3 col-md-6 shuffle-item shuffle-item--visible" data-groups="[&quot;meeting&quot;,&quot;events&quot;]" style={{position: 'absolute', top: '0px', left: '0px', visibility: 'visible', willChange: 'transform', opacity: 1, transform: 'translate(570px, 285px) scale(1)', transitionDuration: '250ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionProperty: 'transform, opacity'}}>
            <div className="image-block">
              <div className="image">
                <img src={GalleryLess1} alt="gallery-image" className="img-fluid" />
                <div className="primary-overlay">
                  <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-seven.jpg"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-item col-lg-3 col-md-6 shuffle-item shuffle-item--visible" data-groups="[&quot;concert&quot;,&quot;conference&quot;]" style={{position: 'absolute', top: '0px', left: '0px', visibility: 'visible', willChange: 'transform', opacity: 1, transform: 'translate(855px, 285px) scale(1)', transitionDuration: '250ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionProperty: 'transform, opacity'}}>
            <div className="image-block">
              <div className="image">
                <img src={GalleryLess2} alt="gallery-image" className="img-fluid" />
                <div className="primary-overlay">
                  <a className="image-popup" data-effect="mfp-with-zoom" href="images/gallery/gallery-popup-eight.jpg"><i className="fa fa-picture-o" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}
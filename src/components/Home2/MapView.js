import React from "react";
import "../../scss/style.scss";
import { Link } from "react-router-dom";

export default function MapView() {
    return (
        <>
            <section className="map new overflow-visible">
                <div className="container-Map">
                    <div className="address-block">
                        <h4>Docklands Convention</h4>
                        <ul className="address-list p-0 m-0">
                            <li><i className="fa fa-home"></i><span>1201 Park Street, Fifth Avenue, Dhanmondy, Dhaka.</span></li>
                            <li><i className="fa fa-phone"></i><span>[88] 657 524 332</span></li>
                        </ul>
                        <Link to="/Contact" className="btn btn-white-md">Get Direction</Link>
                    </div>
                </div>

                <div className="container-Map">
                    <div className="register overlay-dark bg-registration-two">
                        <div className="block">
                            <div className="title text-center">
                                <h3>Register to <span className="alternate">Eventre</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            </div>
                            <form action="#" className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control main" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control main" placeholder="Email" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control main" placeholder="Phone" />
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <select className="form-control main" id="select-ticket">
                                            <option>Ticket Type</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-white-md">Register Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

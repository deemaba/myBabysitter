import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer-light foot-bg">
        <div className="container container-bs">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-1">
                    <div className="widget">
                        <h5>About us</h5>
                        <p>Mybabysitter gives high quality child care solutions to care for your most precious asset in the world.For reliability, peace of mind and heartfelt care for every child, there is no better option than us.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-1">
                    <div className="widget">
                        <h5>Get In Touch</h5>
                        <ul>
                            <li><Link to="/">34/8, Yarka, Israel.</Link></li>
                            <li><Link to="/">support@demma.com</Link></li>
                            <li><Link to="/">+00 111 222 3333</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-1">
                    <div className="widget">
                        <h5>Pages</h5>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/babysitter">Our BabySitters</Link></li>
                            <li><Link to="/findBabysitter">Find BabySitter</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-1">
                    <div className="widget">
                        <h5>Subscribe</h5>
                        <p>Subscribe to our mailing list to get the latest updates.</p>
                        <form action="#" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                            <div className="col text-center d-flex">
                                <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" />
                                <Link to="/" id="btn-subscribe">
                                    <i className="fas fa-paper-plane bg-color-secondary"></i>
                                </Link>
                                <div className="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="subfooter">
            <div className="container container-bs">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex justify-content-between">
                            <div className="de-flex-col justify-content-between">
                                <span onClick={() => window.open("", "_self")}>

                                    <span className="copy">&copy; Copyright 2022 - Deema , All Rights Reserved.</span>
                                </span>

                            </div>
                            <div className="de-flex-col ">
                                <div className="social-icons">
                                    <span onClick={() => window.open("", "_self")}><i className="fa fa-facebook fa-lg"></i></span>
                                    <span onClick={() => window.open("", "_self")}><i className="fa fa-twitter fa-lg"></i></span>
                                    <span onClick={() => window.open("", "_self")}><i className="fa fa-linkedin fa-lg"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
export default Footer;
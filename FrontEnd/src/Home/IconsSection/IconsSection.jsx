import React from "react";
const IconsSection = () => {
    return (
        <section className="container container-bs">
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <div className="list-box d-flex align-items-center">
                        <div className="list-icon">
                            <i className="far fa-edit"></i>
                        </div>
                        <div className="content">
                            <h3>Check Their Credentials</h3>
                            <p>We aim to validate all our babysitters and nannies but also recommend that you check all credentials.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <div className="list-box d-flex align-items-center">
                        <div className="list-icon">
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className="content">
                            <h3>Lock in a Date</h3>
                            <p>Contact your babysitter; agree on date, time, pay rate and responsibilities.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="list-box d-flex justify-content-start align-items-center">
                        <div className="list-icon">
                            <i className="	fas fa-tv"></i>
                        </div>
                        <div className="content">
                            <h3>Join the Network</h3>
                            <p>Our membership options make it easy and affordable for you to find the perfect babysitter or nanny.</p>
                        </div>
                    </div>
                </div><div className="col-lg-3 col-md-6">
                    <div className="list-box d-flex justify-content-start align-items-center">
                        <div className="list-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="content">
                            <h3>Find a Babysitter</h3>
                            <p>Search for a babysitter or nanny in your local area or post a job to hire a qualified nanny.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container container-bs">
                <div className="row mt-5">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h3><span className="orange-text">We’re here</span> to help you find a babysitter who is right for
                                your family</h3>
                            <p>Very qualified sitters,Gender has always played a role in the world of toys. At MyBabysitter we understand it, and that’s why we pay attention to every aspect of gender and equality</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IconsSection;
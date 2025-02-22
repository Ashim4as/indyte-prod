import React from 'react';
import './plans.css';

const Plans = () => {
    return (
        <div className="ltn__feature-area pt-90 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area ltn__section-title-2--- text-center">
                            <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Plans</h6>
                            <h1 className="section-title">Indyte Customized Diet Plans</h1>
                        </div>
                    </div>
                </div>
                <div className="row ltn__custom-gutter">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="ltn__feature-item ltn__feature-item-6 active">
                            <div className="ltn__feature-icon">
                                <img src="images/plans/p12.jpg" alt="Smart living" />
                                <span><i className="flaticon-apartment"></i></span>
                            </div>
                            <div className="ltn__feature-info">
                                <h4><a href="service-details.html">Weight Management</a></h4>
                                <p>Weight Management Re-Shape Your Body With The Best Weight Loss…</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="ltn__feature-item ltn__feature-item-6 active">
                            <div className="ltn__feature-icon">
                                <img src="images/plans/p2.jpg" alt="ECO Construction" />
                                <span><i className="flaticon-park"></i></span>
                            </div>
                            <div className="ltn__feature-info">
                                <h4><a href="service-details.html">Muscle gain and Fat Loss
                                </a></h4>
                                <p>Achieve Your Fitness Goals with Indyte: Muscle Gain & Fat…</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="ltn__feature-item ltn__feature-item-6 active">
                            <div className="ltn__feature-icon">
                                <img src="images/plans/p3.jpg" alt="Atractive Location" />
                                <span><i className="flaticon-maps-and-location"></i></span>
                            </div>
                            <div className="ltn__feature-info">
                                <h4><a href="service-details.html">
                                Diabetes</a></h4>
                                <p>diabetes Transform Your Lives With The Best Diabetes Nutritionist at.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="ltn__feature-item ltn__feature-item-6 active">
                            <div className="ltn__feature-icon">
                                <img src="images/plans/p4.jpg" alt="Modern Technology" />
                                <span><i className="flaticon-excavator"></i></span>
                            </div>
                            <div className="ltn__feature-info">
                                <h4><a href="service-details.html">PCOD/PCOS</a></h4>
                                <p>PCOD- PCOS DIET Customize Your Diet Plans for PCOS And…</p>
                            </div>
                        </div>
                    </div>
                    {/* Additional set of four cards */}
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="ltn__feature-item ltn__feature-item-6 active">
                            <div className="ltn__feature-icon">
                                <img src="images/plans/p5.jpg" alt="Feature 5" />
                                <span><i className="flaticon-apartment"></i></span>
                            </div>
                            <div className="ltn__feature-info">
                                <h4><a href="service-details.html">
                                Cardiac Diet</a></h4>
                                <p>Your Guide to a Heart-Healthy Diet Discover how the right…</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="ltn__feature-item ltn__feature-item-6 active">
                            <div className="ltn__feature-icon">
                                <img src="images/plans/p6.jpg" alt="Feature 6" />
                                <span><i className="flaticon-park"></i></span>
                            </div>
                            <div className="ltn__feature-info">
                                <h4><a href="service-details.html">Cholesterol diet</a></h4>
                                <p>Cholesterol Diet Improve Your Levels with Heart-Healthy Cholesterol Diet Plans.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="ltn__feature-item ltn__feature-item-6 active">
                            <div className="ltn__feature-icon">
                                <img src="images/plans/p7.jpg" alt="Feature 7" />
                                <span><i className="flaticon-maps-and-location"></i></span>
                            </div>
                            <div className="ltn__feature-info">
                                <h4><a href="service-details.html">Fatty Liver</a></h4>
                                <p>Fatty Liver Welcome to Indyte – Your Partner in Personalized…</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="ltn__feature-item ltn__feature-item-6 active">
                            <div className="ltn__feature-icon">
                                <img src="images/plans/p8.jpg" alt="Feature 8" />
                                <span><i className="flaticon-excavator"></i></span>
                            </div>
                            <div className="ltn__feature-info">
                                <h4><a href="service-details.html">
                                Arthritis</a></h4>
                                <p>
                                Arthritis Get Customized Diet Chart For Arthritis Patients Designed By…</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;

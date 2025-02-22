import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="ltn__about-us-area pt-115 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="about-us-img-wrap about-img-left">
                            <img src="images/a1.png" alt="About Us Image" />
                            <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3 d-none">
                                {/* <div className="ltn__video-img ltn__animation-pulse1">
                                    <img src="img/others/8.png" alt="video popup bg image" />
                                    <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&amp;showinfo=0" data-rel="lightcase:myCollection">
                                        <i className="fa fa-play"></i>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="about-us-info-wrap">
                            <div className="section-title-area ltn__section-title-2--- mb-30">
                                <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">About Us</h6>
                                <h1 className="section-title">WHY IS INDYTE A BETTER PLATFORM WITH THE BEST ONLINE DIET CONSULTATION?</h1>
                                <p>Going to the gym and having an active lifestyle may help but without proper nutrition, all your efforts go in vain! Well, not anymore! We at Indyte have gathered a team of online diet consultation experts with over a decade of experience as diet and nutrition coaches to make you healthier and happier by improving your food choices.</p>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-3">
                                <div className="ltn__feature-icon">
                                    <span><i className="flaticon-house-4"></i></span>
                                </div>
                                <div className="ltn__feature-info">
                                    <h4><a href="service-details.html">You will thank yourself for entrusting us with your healthcare journey. </a></h4>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p> */}
                                </div>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-3">
                                <div className="ltn__feature-icon">
                                    <span><i className="flaticon-call-center-agent"></i></span>
                                </div>
                                <div className="ltn__feature-info">
                                    <h4><a href="service-details.html">At INDYTE Nutrition and Lifestyle Clinic , we are not just in the business of providing online diet consultation; we are in the business of making lives better</a></h4>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p> */}
                                </div>
                            </div>
                            <div className="ltn__feature-item ltn__feature-item-3">
                                <div className="ltn__feature-icon">
                                    <span><i className="flaticon-maps-and-location"></i></span>
                                </div>
                                <div className="ltn__feature-info">
                                    <h4><a href="service-details.html">Let’s embark on this journey together, where your betterment is our reward.</a></h4>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisic do eiusmod tempor incididunt ut labore et</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

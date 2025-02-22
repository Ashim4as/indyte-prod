import React from 'react';
import './Testimonial.css';
import TestimonialImg from './Testimonial_img';

const Testimonial = () => {
    return (
        <>
            <TestimonialImg />
            <div className="ltn__testimonial-area pt-100 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Column: Text Blocks */}
                        <div className="col-lg-6">
                            <div className="row">
                                {/* First Text Block */}
                                <div className="col-md-5">
                                    <div className="testimonial-item">
                                        <h3>Our Commitment to Your Betterment</h3>
                                        <p>
                                            At INDYTE, our dedication goes beyond the conventional expectations of a business. We are not merely a service provider; we are advocates for your well-being, driven by a profound passion for making a positive impact on YOUR lives.
                                        </p>
                                    </div>
                                </div>
                                {/* Second Text Block */}
                                <div className="col-md-5">
                                    <div className="testimonial-item">
                                        <h3>Building Trust Through Transparency</h3>
                                        <p>
                                            Transparency is the cornerstone of our approach. We want you to feel confident that when you choose INDYTE, you choose a partner genuinely invested in your health. Our commitment to transparency extends to our practices, online diet consultation, and communication with you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Third Text Block */}
                                <div className="col-md-5">
                                    <div className="testimonial-item">
                                        <h3>More Than a Business</h3>
                                        <p>
                                            Unlike others, our mission extends beyond financial transactions. We are driven by a genuine desire to see you thrive, to witness the transformative power of a healthier lifestyle, and to be a catalyst for positive change in your life.
                                        </p>
                                    </div>
                                </div>
                                {/* Fourth Text Block */}
                                <div className="col-md-5">
                                    <div className="testimonial-item">
                                        <h3>Community, Not Just Clients</h3>
                                        <p>
                                            We see our clients as more than just clients; you are a valued part of our community. The relationships we build extend beyond the walls of our clinic. Your success stories inspire not only us but others in the community, creating a ripple effect of positive change.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column: Image */}
                        <div className="col-lg-6">
                            <div className="testimonial-image" style={{ textAlign: 'right' }}>
                                <img alt="card img" className="rounded-t float-right duration-1000" src="/images/hero2.png" style={{ width: '90%', marginBottom: '20px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;

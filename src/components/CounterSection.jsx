import React from 'react';

const CounterSection = () => {
    return (
        <div className="ltn__counterup-area section-bg-1 pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 align-self-center">
                        <div className="ltn__counterup-item text-color-white---">
                            <div className="counter-icon">
                                <i className="fas fa-calendar-alt"></i> {/* Changed icon */}
                            </div>
                            <h1><span className="counter">12+</span></h1>
                            <h6>Years of Experience</h6>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 align-self-center">
                        <div className="ltn__counterup-item text-color-white---">
                            <div className="counter-icon">
                                <i className="fas fa-users"></i> {/* Changed icon */}
                            </div>
                            <h1><span className="counter">15000+</span></h1>
                            <h6>Clients Served</h6>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 align-self-center">
                        <div className="ltn__counterup-item text-color-white---">
                            <div className="counter-icon">
                                <i className="fas fa-star"></i> {/* Changed icon */}
                            </div>
                            <h1><span className="counter">500+</span></h1>
                            <h6>5 Star Ratings</h6>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 align-self-center">
                        <div className="ltn__counterup-item text-color-white---">
                            <div className="counter-icon">
                                <i className="fas fa-smile"></i> {/* Changed icon */}
                            </div>
                            <h1><span className="counter">95%+</span></h1>
                            <h6>Happy Clients</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;

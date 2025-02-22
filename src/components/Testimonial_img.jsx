import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Testimonial_img.css';

const TestimonialImg = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="ltn__img-slider-area">
            <div className="container-fluid">
                <h2 className="section-title">If they can you can</h2>
                <Slider {...settings} className="ltn__image-slider-4-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/21.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t1.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/22.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t2.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/23.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t3.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/24.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t4.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/22.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t5.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/25.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t6.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/26.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t7.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/27.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t8.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/28.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t9.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/29.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t10.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/30.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t11.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/31.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t12.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/32.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t13.jpeg" alt="Image" />
                        </a>
                    </div>
                    <div className="ltn__img-slide-item-4">
                        <a href="img/img-slide/33.jpg" data-rel="lightcase:myCollection">
                            <img src="images/testi/t14.jpeg" alt="Image" />
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialImg;

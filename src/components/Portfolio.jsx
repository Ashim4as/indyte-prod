import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaTags, FaCalendarAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick'; // Import the slider
import "slick-carousel/slick/slick.css"; // Import slick-carousel css
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme css

const Portfolio = () => {
  
        const blogPosts = [
            {
                id: 1,
                title: 'How to Eat Soya Chunks for Weight Gain: Best Recipes and Tips',
                author: 'Admin',
                tags: 'Decorate',
                date: 'June 24, 2021',
                imgSrc: 'images/blogs/b1.jpg',
                link: 'blog-details.html',
            },
            {
                id: 2,
                title: 'How to Lose Weight in 15 Days: Meal Plans and Workouts',
                author: 'Admin',
                tags: 'Interior',
                date: 'July 23, 2021',
                imgSrc: 'images/blogs/b2.jpg',
                link: 'blog-details.html',
            },
            {
                id: 3,
                title: 'Banana Shake for Weight Gain: A Delicious Addition to Your Diet',
                author: 'Admin',
                tags: 'Estate',
                date: 'May 22, 2021',
                imgSrc: 'images/blogs/b3.jpg',
                link: 'blog-details.html',
            },
            {
                id: 4,
                title: 'Renovating a Living Room? Experts Share Their Secrets',
                author: 'Admin',
                tags: 'Room',
                date: 'June 24, 2021',
                imgSrc: 'images/blog/b4.jpg',
                link: 'blog-details.html',
            },
            {
                id: 5,
                title: '7 home trends that will shape your house in 2021',
                author: 'Admin',
                tags: 'Trends',
                date: 'June 24, 2021',
                imgSrc: 'images/blog/b5.jpg',
                link: 'blog-details.html',
            },
        ];

        const NextArrow = (props) => {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block", right: "10px" }}
                    onClick={onClick}
                >
                    <FaArrowRight />
                </div>
            );
        };

        const PrevArrow = (props) => {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
                    onClick={onClick}
                >
                    <FaArrowLeft />
                </div>
            );
        };

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="ltn__blog-area pt-115--- pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center">
                                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Latest From Blogs</h6>
                                <h1 className="section-title">Latest News Feeds</h1>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {blogPosts.map((post) => (
                            <div key={post.id} className="col-lg-12">
                                <div className="ltn__blog-item ltn__blog-item-3">
                                    <div className="ltn__blog-img">
                                        <a href={post.link}><img src={post.imgSrc} alt="#" /></a>
                                    </div>
                                    <div className="ltn__blog-brief">
                                        <div className="ltn__blog-meta">
                                            <ul>
                                                <li className="ltn__blog-author">
                                                    <a href="#">
                                                        <FaUser /> by: {post.author}
                                                    </a>
                                                </li>
                                                <li className="ltn__blog-tags">
                                                    <a href="#">
                                                        <FaTags /> {post.tags}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3 className="ltn__blog-title">
                                            <a href={post.link}>{post.title}</a>
                                        </h3>
                                        <div className="ltn__blog-meta-btn">
                                            <div className="ltn__blog-meta">
                                                <ul>
                                                    <li className="ltn__blog-date">
                                                        <FaCalendarAlt /> {post.date}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="ltn__blog-btn">
                                                <a href={post.link}>Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    };



    export default Portfolio;
import React from 'react'
import { Link } from "react-scroll";
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Home = () => {
    return (
        <>
<Header/>
        <section id={'home'} className="home">
    <div className="container">
        <div className="row height">
            <div className="col-12 col-md-6 height d-flex align-items-center text-left">
                <div className="text d-flex align-items-center">
                    <div className="home-text text-black height1">
                        <h6 className="sub-heading mb-2">Beautiful and Responsive</h6>
                        <h1 className="main-heading mb-0">Creative Websites</h1>
                        <h4 className="heading mb-3">Simple & Easy</h4>

                        <Link
    activeClass="active"
    to="blog"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="btn btn-slider pink-btn rounded-pill"
>Our Latest Work</Link>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="large-logo">
                    <img src="https://megaone.acrothemes.com/digital-marketing/img/logo-large.png" alt="img" />
                </div>

                <div className="plant1">
                    <div className="large-icon plant-home">
                        <img src="https://megaone.acrothemes.com/digital-marketing/img/plant1.png" alt="img" />
                    </div>

                </div>

            </div>
        </div>
    </div>

    <svg className="yellow-square" viewBox="0 0 200 655" xmlns="http://www.w3.org/2000/svg">
        <rect  x = "0" y = "32" width = "1616" height = "1616" rx="28" ry="28" fill="#ffc107" transform = "rotate(-45 200 100)"/>
    </svg>

    <svg className="left-square small-view" viewBox="0 0 310 655" xmlns="http://www.w3.org/2000/svg">
        <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#fa2851" transform = "rotate(135 100 245)"/>
    </svg>

</section>
<section id={'feature'} className="feature">
    <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12 text-center">
                    <div className="text">
                        <div className="home-text text-black">
                            <h1 className="main-heading mb-4">We are Digital Agency</h1>
                            <p className="sub-heading mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                 aliqua</p>
                            <Link to="#" className="btn btn-slider pink-btn rounded-pill">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-90">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <div className="card box text-center">
                        <div className="feature-icon text-center">
                            <i className="far fa-lightbulb"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text sub-heading text-black">We have some creative ideas for you.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mt-5 mt-md-0 mb-3 mb-md-0">
                    <div className="card box text-center">
                        <div className="feature-icon text-center center">
                            <i className="far fa-copy"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text sub-heading text-black">Your business is our top priority.</p>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-md-4 mt-5 mt-md-0">
                    <div className="card box text-center">
                        <div className="feature-icon text-center">
                            <i className="far fa-heart"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text sub-heading text-black">We love our valued customers.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
</section>


<section id="stats" className="stats">
        <div className="container">
            <div className="row m-0">
                    <div className="col-lg-6 offset-lg-4 col-md-10 offset-md-0 col-sm-12 text-left p-0">
                        <div className="stats-text">
                            <div className="home-text text-black">
                                <h1 className="sub-heading">Let us show you some stats</h1>
                                <h1 className="main-heading mt-3 mb-4">We have done great stuff over the past few years.</h1>
                                <p className="sub-heading mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    aliqua</p>
                            </div>
                        </div>
                    </div>
                     <div className="col-2">
                         <div className="plant-img">
                             <div className="plant">
                                <img src="https://megaone.acrothemes.com/digital-marketing/img/plant.jpg" alt="img" />
                             </div>
                         </div>
                     </div>
                 </div>

            <div className="row mt-40">
                <div className="col-lg-8 offset-lg-4 col-md-12 offset-md-0 col-sm-12">
                    <div className="row">
                        <div className="col-12 col-md-4">
                                <div className="stats-box d-flex">
                                    <div className="stats-icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <div className="stats-box-text ml-4">
                                        <h1 className="numbering">500+</h1>
                                        <p className="sub-heading">Happy Clients</p>
                                    </div>
                                </div>
                            </div>

                        <div className="col-12 col-md-4 mt-4 mt-md-0">
                            <div className="stats-box d-flex">
                                <div className="stats-icon">
                                    <i className="fas fa-list"></i>
                                </div>
                                <div className="stats-box-text ml-4">
                                    <h1 className="numbering">10740+</h1>
                                    <p className="sub-heading">Lines of Code</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mt-4 mt-md-0">
                            <div className="stats-box d-flex">
                                <div className="stats-icon">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="stats-box-text ml-4">
                                    <h1 className="numbering">200+</h1>
                                    <p className="sub-heading">Project Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <svg className="left-square stats" viewBox="0 0 310 655" xmlns="http://www.w3.org/2000/svg">
        <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#fa2851" transform = "rotate(135 100 245)"/>
    </svg>

</section>




<section id="design" className="design">
<div className="container">
        <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
        <div className="stats-text pl-3 pl-md-5">
            <div className="home-text text-black">
                <h1 className="sub-heading">Let us make you happy with</h1>
                <h1 className="main-heading mt-3 mb-4"><span className="text-yellow">Robust Design</span> and Development Solutions</h1>
                <p className="sub-heading mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut
                    aliq. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <Link to="#" className="btn btn-main pink-btn rounded-pill mt-3">Start Now</Link>
            </div>
        </div>
        </div>
        </div>
    </div>

    <svg className="right-square team" viewBox="0 0 280 655" xmlns="http://www.w3.org/2000/svg">
        <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#ffc107" transform = "rotate(-45 310 100)"/>
    </svg>
    <svg className="right-square team small-view" viewBox="0 0 280 655" xmlns="http://www.w3.org/2000/svg">
        <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#fa2851" transform = "rotate(-45 310 100)"/>
    </svg>

</section>

<Portfolio />
<section id="testimonial" className="testimonial">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
            <h1 className="main-heading mt-3 mb-4">Latest Graphics <br />Design Trens and News</h1>
                        <p className="sub-heading mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut
                            aliq. Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
               

                <div className="row mt-40">
                <div className="col-lg-12 col-md-12 offset-md-0 p-0">
                    <div className="blog-owl owl-carousel owl-theme no-gutters blog-area" id="blog-carousal">

                        <div className="item blog-item">
                            <div className="blog-img">
                                <Link to="assests/standalone.html">
                                    <img src="https://megaone.acrothemes.com/digital-marketing/img/blog1.jpg" alt="blog img" /></Link>
                            </div>

                            <div className="blog-text text-center text-md-left">
                                <div className="date mb-2">
                                    <p className="text-red">May27, 2020</p>
                                </div>
                                <div className="info-blog">
                                    <Link to="assests/standalone.html"><h4>Web design is fun</h4></Link>
                                </div>
                                <div className="blog-description mb-3">
                                    <p className="sub-heading">Lorem ipsum dolor sit amet, consadipi. Ut enim adipiscing elit, sed do tempor.</p>
                                </div>
                                <div className="writer d-flex">
                                    <div className="writer-img">
                                        <img src="https://megaone.acrothemes.com/digital-marketing/img/blog1-writer.jpg" alt="img" />
                                    </div>
                                    <p className="writer-name font-italic ml-3">David Villas</p>
                                </div>
                            </div>
                        </div>

                        <div className="item blog-item">
                            <div className="blog-img">
                                <Link to="assests/standalone.html">
                                    <img src="https://megaone.acrothemes.com/digital-marketing/img/blog2.jpg" alt="blog img" /></Link>
                            </div>

                            <div className="blog-text text-center text-md-left">
                                <div className="date mb-2">
                                    <p className="text-red">June14, 2020</p>
                                </div>
                                <div className="info-blog">
                                    <Link to="assests/standalone.html"><h4>Future of websites</h4></Link>
                                </div>
                                <div className="blog-description mb-3">
                                    <p className="sub-heading">Lorem ipsum dolor sit amet, consadipi. Ut enim adipiscing elit, sed do tempor.</p>
                                </div>
                                <div className="writer d-flex">
                                    <div className="writer-img">
                                        <img src="https://megaone.acrothemes.com/digital-marketing/img/blog2-writer.jpg" alt="img" />
                                    </div>
                                    <p className="writer-name font-italic ml-3">Lisa Jhonson</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
                </div>
            </div>
        </div>

     
    </div>

    <svg className="right-square test" viewBox="0 0 312 600" xmlns="http://www.w3.org/2000/svg">
        <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#fa2851" transform = "rotate(-45 310 100)"/>
    </svg>

    <svg className="left-square gallery small-view" viewBox="0 0 310 655" xmlns="http://www.w3.org/2000/svg">
        <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#fa2851" transform = "rotate(135 100 245)"/>
    </svg>

</section>


<Footer />
            
        </>
    )
}

export default Home

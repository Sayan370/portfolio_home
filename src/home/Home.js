import React,{useState,useEffect} from 'react'
import { Link } from "react-scroll";
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import News from '../news/News';
import axios from 'axios';
import env from "react-dotenv";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Home = () => {

  
  
    const [latestNews, setLatestNews] = useState([]);
   

    
    useEffect(() => {
     
      fetch();


    
    
    },[]);



    const fetch=async() => {
      const result = await axios(`${env.API_URL}news/records/`);

     
     
      setLatestNews(result.data);
     
    };


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1
        }
      };


    return (
        <>
<Header/>
        <section id={'home'} className="home">
    <div className="container">
        <div className="row height">
            <div className="col-12 col-md-6 height d-flex align-items-center text-left">
                <div className="text d-flex align-items-center">
                    <div className="home-text text-black height1">
                        <h6 className="sub-heading mb-2">Sover and Perfect</h6>
                        <h1 className="main-heading mb-0">Creative Designs</h1>
                        <h4 className="heading mb-3">Simple & Easy</h4>
                        <p>Good design’s not about what medium you’re working in. It’s about thinking hard about what you want to do</p>

                        <Link
    
    to="gallery"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="btn btn-slider pink-btn rounded-pill"
>My Latest Work</Link>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="large-logo">
                   
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
                            <h1 className="main-heading mb-4">About</h1>
                          
                           
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <p className="sub-heading mb-4" style={{textAlign: 'justify'}}>I will Create Creative Social Media Campaigns for Your Brand. I'm a Designer that helps companies establish their identities 
by providing modern and creative designing solutions. I have always been creative and have a keen eye for details. 
I love everything that has to do with Graphic Design, Banner design, Photo Retouch, Photo Editing and Social Media Post, etc. 
I have grown in the industry, and hope to continue this growth with my commitment to producing high quality and creative work.
                                 </p>
                               
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <div className="card box text-center">
                        <div className="feature-icon text-center">
                            <i className="far fa-lightbulb"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text sub-heading text-black">I have some creative ideas for you.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mt-5 mt-md-0 mb-3 mb-md-0">
                    <div className="card box text-center">
                        <div className="feature-icon text-center center">
                            <i className="far fa-copy"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text sub-heading text-black">Top Quality Graphic & Multimedia Designer.</p>
                        </div>
                    </div>

                </div>

                <div className="col-12 col-md-4 mt-5 mt-md-0">
                    <div className="card box text-center">
                        <div className="feature-icon text-center">
                            <i className="far fa-heart"></i>
                        </div>
                        <div className="card-body">
                            <p className="card-text sub-heading text-black">Take Care of my valuable customers.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row mt-20">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <Link  to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} className="btn btn-slider pink-btn rounded-pill">Contact Now</Link>
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
                                <h1 className="main-heading mt-3 mb-4">I have done great stuff over the past few years.</h1>
                                <p className="sub-heading mb-3"></p>
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
                                        <h1 className="numbering">50+</h1>
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
                                    <h1 className="numbering">200+</h1>
                                    <p className="sub-heading">Graphics</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mt-4 mt-md-0">
                            <div className="stats-box d-flex">
                                <div className="stats-icon">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="stats-box-text ml-4">
                                    <h1 className="numbering">20+</h1>
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






<Portfolio />
<section id="testimonial"  className="testimonial">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
            <h1 className="main-heading mt-3 mb-4">Latest Graphics <br />Design Trends and News</h1>
                        <p className="sub-heading mb-3"></p>
               

                <div className="row mt-40">
                <div className="col-lg-12 col-md-12 offset-md-0 p-0">
                    
                
                    <Carousel autoPlay={true}
  autoPlaySpeed={5000} responsive={responsive}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}  itemClass="item blog-item" containerClass="custom-slider blog-owl no-gutters blog-area">
                    {latestNews.map((data1) => <News data={data1} key={data1._id.toString()} />).reverse()}
                    </Carousel>
                   
                
            </div>
                </div>
            </div>
        </div>

     
    </div>

    <svg className="right-square test" viewBox="0 0 312 600" xmlns="http://www.w3.org/2000/svg">
        <rect  x = "0" y = "32" width = "1616" height = "1616" rx="48" ry="48" fill="#ffc107" transform = "rotate(-45 310 100)"/>
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

import React,{useState,useEffect} from 'react'
import {Link } from "react-router-dom";
import axios from 'axios';
import PortfolioContent from '../portfolioContent/PortfolioContent';
import env from "react-dotenv";

const Portfolio = () => {

  
      const [category, setCategory] = useState([]);
      const [portfolio, setPortfolio] = useState([]);


      
      useEffect(() => {
        getCategory();
        fetch();


      
      
      },[]);

  
  
      const fetch=async() => {
        const result = await axios(`${env.API_URL}portfolio/records/`);

       
        setPortfolio(result.data);
       
      };

      const  getCategory= async ()=>{
        await axios.get(env.API_URL+`category/records`)
          .then(res => {
      
             if(res.status===200){
            
      
        
      
                setCategory(res.data);
      
      
      
      
      return true;
      
             }else{
      
      
                 return false;
             }
      
            
      
          })
          .catch(err => {
            console.log(err.message,4000);
             return false;
          });
      
        }



    return (
        <><section id="gallery" className="gallery">
    <div className="container">
        <div className="section-heading">
            <div className="row">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                    <div className="ex-detail">
                        <h1 className="main-heading">Our<br/>
                            Amazing Work
                        </h1>
                    </div>
                </div>
                <div className="col-md-12 pt-5">
                    <div id="js-filters-mosaic" className="cbp-l-filters-button wow fadeInUp" data-wow-delay="350ms">
                        <div data-filter="*" className="cbp-filter-item-active cbp-filter-item"> ALL</div>
                        {category.map((data) => <div key={data._id.toString()} data-filter={"."+data._id} className="cbp-filter-item">{data.title}</div>)}
                        
                       
                    </div>

                    <div id="js-grid-mosaic" className="cbp cbp-l-grid-mosaic">

                    {portfolio.map((data1) => <PortfolioContent data={data1} key={data1._id.toString()} />)}

                      
                    </div>

                    <div id="js-loadMore-lightbox-gallery" className="cbp-l-loadMore-button wow fadeInUp" data-wow-delay="650ms">
                        <div className="row portfolio-foot-detail">
                            <div className="col-6 col-lg-3 offset-lg-6 text-left pl-4">
                                <span className="p-text">We've Completed More Then</span>
                                <h4 className="p-num">530</h4>
                                <span className="p-text">Projects for Our amazing Clients</span>
                            </div>
                            <div className="col-6 col-lg-3  d-flex justify-content-end align-items-center">
                                <Link to="assests/standalone.html" className="btn btn-main yellow-btn rounded-pill mt-3">View All</Link><span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
        </>
    )
}

export default Portfolio

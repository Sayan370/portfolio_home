import React,{useState,useEffect} from 'react'
import axios from 'axios';
import PortfolioContent from '../portfolioContent/PortfolioContent';
import env from "react-dotenv";
import { Grid, Row } from 'rsuite';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
const Portfolio = () => {

  
      const [category, setCategory] = useState([]);
      const [staticportfolio, setStaticPortfolio] = useState([]);
      const [portfolio, setPortfolio] = useState([]);
      const [selectedActive, setSelectedActive] = useState('All');


      
      useEffect(() => {
        getCategory();
        fetch();


      
      
      },[]);

  
  
      const fetch=async() => {
        const result = await axios(`${env.API_URL}portfolio/records/`);

       
        setStaticPortfolio(result.data);
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

       const handleClick=(ids) => {
            let filterCoffee = [];
            if (ids === "All") {
                setPortfolio(staticportfolio);
            } else {

                
                if(staticportfolio.length>0){
                let demo=staticportfolio
               
            filterCoffee = demo.filter(
             portfolios => portfolios.category === ids
             );
             
             setPortfolio(filterCoffee);

            }

          

            }
            setSelectedActive(ids)

          }



    return (
        <><section id="gallery" className="gallery">
    <div className="container">
        <div className="section-heading">
            <div className="row">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                    <div className="ex-detail">
                        <h1 className="main-heading">My<br/>
                            Amazing Work
                        </h1>
                    </div>
                </div>
                <div className="col-md-12 pt-5">
                    <div id="js-filters-mosaic" className="cbp-l-filters-button wow fadeInUp" data-wow-delay="350ms">
                        <div data-filter="*" className={selectedActive==='All' ? 'cbp-filter-item-active cbp-filter-item' : 'cbp-filter-item'} onClick={() =>handleClick('All')}> ALL</div>
                        {category.map((data) => <div key={data._id.toString()} data-filter={"."+data._id} onClick={() =>handleClick(data._id)} className={selectedActive===data._id ? 'cbp-filter-item-active cbp-filter-item' : 'cbp-filter-item'}>{data.title}</div>)}
                        
                       
                    </div>

                    <div className="abc">

                    <Grid fluid>
    <Row className="show-grid">
    <SimpleReactLightbox>
    <SRLWrapper>
                    {portfolio.map((data1) => <PortfolioContent data={data1} key={data1._id.toString()} />).reverse()}
</SRLWrapper>
                    </SimpleReactLightbox>
                    </Row>
                    </Grid>
   
   
    
                      
                    </div>

                    <div id="js-loadMore-lightbox-gallery" className="cbp-l-loadMore-button wow fadeInUp" data-wow-delay="650ms">
                        <div className="row portfolio-foot-detail">
                            <div className="col-6 col-lg-3 offset-lg-6 text-left pl-4">
                                <span className="p-text">We've Completed More Then</span>
                                <h4 className="p-num">100</h4>
                                <span className="p-text">Projects for Our amazing Clients</span>
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

import React,{useEffect,useState} from 'react'
import axios from 'axios';
import env from "react-dotenv";
import { Col } from 'rsuite';
const PortfolioContent = ({data}) => {

    

const [catTitle,setCattitle]=useState(null);
    useEffect(()=>{

        he4(data.category);

      
       
      

      },[data.category]);



      const he4=  async(datas)=>{  

        const formData1 = new FormData();
        formData1.append('id', datas);
   
        await axios.post(`${env.API_URL}category/find`,formData1)
        .then(res => {
    
           if(res.status===200){

          
           
            setCattitle(res.data.title)
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



        
        <>
<Col xs={24} sm={12} md={12} className={data.category}>

         
                            <a href={data.photo} className=" cbp-lightbox">
                                <div className="cbp-caption-defaultWrap">
                                    <img src={data.photo} alt={data.title+" by Akash Bhattacharjee"} className="portfolio-img" />
                                </div>
                                <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                                    <div className="hover-text">
                                        <h4 className="p-hover-title">{data.title}</h4>
                                        <p className="p-hover-des">{catTitle}</p>
                                    </div>
                                </div>
                            </a>
                 
                        
                        </Col>
        </>
    )
}

export default PortfolioContent

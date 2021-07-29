import React,{useEffect,useState} from 'react'
import axios from 'axios';
import env from "react-dotenv";


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
            <div className={"cbp-item " + data.category}>
                            <a href={`${env.IMG_URL}images/` + data.photo} className="cbp-caption cbp-lightbox" data-title={catTitle+"<br>by Akash Bhattacharjee"}>
                                <div className="cbp-caption-defaultWrap">
                                    <img src={`${env.IMG_URL}images/` + data.photo} alt="img" className="portfolio-img" />
                                </div>
                                <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                                    <div className="hover-text">
                                        <h4 className="p-hover-title">{catTitle}</h4>
                                        <p className="p-hover-des">{data.title}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
        </>
    )
}

export default PortfolioContent

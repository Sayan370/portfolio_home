import React,{useEffect,useState} from 'react'
import {Link } from "react-router-dom";
import axios from 'axios';


const PortfolioContent = ({data}) => {

    

const [catTitle,setCattitle]=useState(null);
    useEffect(()=>{

        console.log(data.category);
        he4(data.category);
  

      },[data.category]);


      
      


      const he4=  async(datas)=>{  

        const formData1 = new FormData();
        formData1.append('id', datas);
   
        await axios.post(`${process.env.API_URL}/category/find`,formData1)
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
                            <Link to="" className="cbp-caption cbp-lightbox" data-title="Workout Buddy<br>by Tiberiu Neamu">
                                <div className="cbp-caption-defaultWrap">
                                    <img src={"http://18.119.126.245:5000/images/" + data.photo} alt="img" />
                                </div>
                                <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                                    <div className="hover-text">
                                        <h4 className="p-hover-title">{catTitle}</h4>
                                        <p className="p-hover-des">{data.title}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
        </>
    )
}

export default PortfolioContent

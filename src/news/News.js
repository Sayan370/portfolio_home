import React from 'react'

const News = ({data}) => {
    const datex=new Date(data.date_added);

    let stringdate=datex.toDateString();
    return (
        <>

<div>
                            <div className="blog-img">
                                <a href={ data.url} target="_blank" rel="noreferrer">
                                    <img src={data.photo} alt="blog img" /></a>
                            </div>

                            <div className="blog-text text-center text-md-left">
                                <div className="date mb-2">
                                    <p className="text-red">{stringdate}</p>
                                </div>
                                <div className="info-blog">
                                    <a href={ data.url} target="_blank" rel="noreferrer"><h4>{data.title}</h4></a>
                                </div>
                                <div className="blog-description mb-3">
                                    <p className="sub-heading">{data.description}</p>
                                </div>
                                <div className="writer d-flex">
                                    <div className="writer-img">
                                        <img src="https://megaone.acrothemes.com/digital-marketing/img/blog1-writer.jpg" alt="img" />
                                    </div>
                                    <p className="writer-name font-italic ml-3">Admin</p>
                                </div>
                            </div>
                        </div>
            
        </>
    )
}

export default News

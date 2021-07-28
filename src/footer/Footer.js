import React from 'react'

const Footer = () => {
    return (
        <>
        <section id={"contact"} className="contact">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className="main-heading text-black">Interested?<br />Let's Get In Touch</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-7">
                <form className="contact-form" id="contact-form-data">
                    <div className="row mt-5">
                        <div className="col-sm-12" id="result"></div>
                    </div>
                        <div className="row">
                            <div className="col-12 col-md-5">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Your Name" required  id="candidate_name" name="userName" />
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email Address*" required  id="user_email" name="userEmail" />
                            </div>

                            <div className="form-group ">
                                <input className="form-control" type="text" placeholder="Subject" id="user_subject" name="userSubject" />
                            </div>
                            </div>

                            <div className="col-12 col-md-7">
                                <div className="form-group ">
                                    <textarea className="form-control" placeholder="Your Message" required rows="7" id="user_message" name="userMessage"></textarea>
                                </div>
                            </div>
                        </div>

                    <button type="button" className="btn btn-slider pink-btn rounded-pill w-100 contact_btn" id="submit_btn"><i className="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true"></i> <b>Send Message</b></button>
                </form>
            </div>

            <div className="col-12 col-md-5 mt-5">
                <div className="address-part ml-3">
                <div className="address d-flex mb-4">
                    <i className="fas fa-map-marker-alt address-icon mr-3"></i>
                    <p>123 Pak  Avenue, New York,<br/> United States</p>
                </div>
                <div className="address d-flex mb-4">
                    <i className="fas fa-phone-volume address-icon mr-3"></i>
                    <p>+1 631 12345678<span className="ml-3">  +1 631 12345678 </span> </p>
                </div>
                <div className="address d-flex mr-3">
                    <i className="fas fa-paper-plane address-icon mr-3"></i>
                    <p>email@website.com</p>
                </div>
                </div>

                <div className="plant1">
                    <div className="plant-contact">
                        <img src="https://megaone.acrothemes.com/digital-marketing/img/contact-plant.png" alt="img" />
                    </div>
                    <div className="shadow-contact">
                        <img src="https://megaone.acrothemes.com/digital-marketing/img/shadow-contact.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>

        <div className="row footer">
            <div className="col-12 col-md-5">
                <ul className="footer_ul mb-50">
                    <li className="footer_list"><i className="lab la-facebook-f fb"></i></li>
                    <li className="footer_list"><i className="lab la-twitter twt"></i></li>
                    <li className="footer_list"><i className="lab la-google-plus gogle"></i></li>
                    <li className="footer_list"><i className="lab la-linkedin-in link"></i></li>
                    <li className="footer_list"><i className="lab la-instagram inst"></i></li>
                    <li className="footer_list"><i className="las la-envelope gmail"></i></li>
                </ul>
                <p className="info footer_text ml-3"><i className="far fa-copyright"></i>2020 MegaOne. Made with love by themesindustry</p>

            </div>
        </div>

    </div>
    <svg className="right-square contact-square" viewBox="0 0 150 390" xmlns="http://www.w3.org/2000/svg">
        <rect  x = "0" y = "32" width = "1616" height = "1616" rx="18" ry="18" fill="#000" transform = "rotate(-45 310 100)"/>
    </svg>
</section>
            
        </>
    )
}

export default Footer

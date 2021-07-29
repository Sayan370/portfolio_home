import React from 'react'
import { Link } from "react-scroll";

const Header = () => {
    return (
        <>
        <div className="loader-area">
    <div className='loader'>
        <div className='one'></div>
        <div className='two'></div>
        <div className='three'></div>
    </div>
</div>


<header>

    <nav id="my-nav1" className="navbar navbar-expand-lg navbar-light rounded-bar transparent-bar">

        <div className="logo small-screen">
            <Link to="#home" className="scroll"><img src="assests/logo.png" style={{width: '100px'}} alt="Logo Img" /></Link>
        </div>

        <div className="container bg-trans-color">
            <div className="row no-gutters w-100">
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                    <div className="collapse navbar-collapse">
                        <div className="col-3 col-md-2 col-lg-3 text-left p-0">
                            <div className="logo">
                                <Link to="#home" className="scroll"><img src="assests/logo.png" style={{width: '100px'}} alt="Logo Img" /></Link>
                            </div>
                        </div>
                        <div className="col-6 p-0">
                        <ul id="primary" className="navbar-nav text-center">

                            <li className="nav-item">
                                <Link  activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} className="nav-link">home</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active"
    to="feature"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} className="nav-link">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="active"
    to="gallery"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} className="nav-link">work</Link>
                            </li>
                         
                            <li className="nav-item">
                                <Link activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} className="btn btn-slider pink-btn rounded-pill" >contact</Link>
                            </li>
                        </ul>
                        </div>

                        <div className="col-3 text-right p-0">
                            <div className="banner-icons">
                            <a href="mailto:bhattacharjeeakash03@gmail.com"><i className="las la-envelope icons fb"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=+917980198773&text=Hello I have a requirement."><i className="lab la-whatsapp icons twt"></i></a>
                            <a href="https://www.instagram.com/akash_design_wings/"><i className="lab la-instagram icons inst"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Link to="" className="sidemenu_btn" id="sidemenu_toggle">
            <span></span>
            <span></span>
            <span></span>
        </Link>
    </nav>

  
    <div className="side-menu hidden">
        <div className="inner-wrapper">
            <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
            <nav className="side-nav w-100">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link scroll" activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link scroll" activeClass="active"
    to="feature"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link scroll" activeClass="active"
    to="gallery"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>Work</Link>
                    </li>
                  
                    <li className="nav-item">
                        <Link activeClass="active"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} className="btn btn-slider white-btn rounded-pill">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="side-footer w-100">
                <div className="banner-icons">
                    <a href="mailto:bhattacharjeeakash03@gmail.com"><i className="las la-envelope icons"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=+917980198773&text=Hello I have a requirement."><i className="lab la-whatsapp icons"></i></a>
                    <a href="https://www.instagram.com/akash_design_wings/"><i className="lab la-instagram icons"></i></a>
                </div>
                <p>&copy; 2021 Akash Design. Made by <a href="https://api.whatsapp.com/send?phone=+917003369682&text=Hello I have a requirement.">Webscapes</a></p>
            </div>
        </div>
    </div>
    <Link id="close_side_menu" to=""></Link>
   
</header>
        </>
    )
}

export default Header

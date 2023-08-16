import { Link } from 'react-router-dom';
import prorfile from '../img/profile-img.jpg';
import { useState } from 'react';

const Header = () =>
{

    const [activeClass, setActiveClass] = useState('hero');


    const scrollToDiv = (divId) =>
    {
        const targetDiv = document.getElementById(divId);
        if (targetDiv) {
            setActiveClass(divId);
            targetDiv.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (

        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img src={prorfile} alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Sunder Singh</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="https://join.skype.com/invite/wWBIgWKnPMqk" className="google-plus" title='Skype'><i className="bx bxl-skype"></i></a>
                        <a href="https://www.linkedin.com/in/sunder-singh-054749101/" className="linkedin" title='Linkedin'><i className="bx bxl-linkedin"></i></a>
                        <a href="https://www.upwork.com/freelancers/~012b260164a011619f" className="upwork" title='Upwork' ><i className="bx bxl-upwork"></i></a>
                    </div>
                </div>
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li>
                            <div onClick={() => scrollToDiv('hero')} className={`nav-link scrollto ${activeClass === 'hero' ? 'active' : ''}`} >
                                <i className="bx bx-home"></i> <span>Home</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => scrollToDiv('about')} className={`nav-link scrollto ${activeClass === 'about' ? 'active' : ''}`}>
                                <i className="bx bx-user"></i> <span>About</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => scrollToDiv('resume')} className={`nav-link scrollto ${activeClass === 'resume' ? 'active' : ''}`} >
                                <i className="bx bx-file-blank"></i> <span>Resume</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => scrollToDiv('portfolio')} className={`nav-link scrollto ${activeClass === 'portfolio' ? 'active' : ''}`} >
                                <i className="bx bx-book-content"></i> <span>Portfolio</span>
                            </div>
                        </li>
                        <li>
                            <div onClick={() => scrollToDiv('contact')} className={`nav-link scrollto ${activeClass === 'contact' ? 'active' : ''}`}>
                                <i className="bx bx-envelope"></i> <span>Contact</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
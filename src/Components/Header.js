import prorfile from '../img/profile-img.jpg';

const Header = () =>
{
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
                        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        {/* <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li> */}
                        {/* <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li> */}
                        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
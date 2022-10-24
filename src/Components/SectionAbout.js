
import prorfile from '../img/profile-img.jpg';

const SectionAbout = () =>
{
    return (

        // < !-- ======= About Section ======= -->
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>I am super dedicated Gurgaon, India based professional with 5+ years of experience in providing web-design & development services all over the world.Experienced Full Stack developer with a demonstrated history of working in development & design. Skilled in PHP, Laravel, OOP, MVC Pattern, Mysql, Database design, Web Design, Html5, CSS, SAAS, AJAX, Javascript, jquery, Bootstrap. Strong arts and design.
                        I can offer you all the advantages of freelancing, realistic prices and client confidentially without the worry with a passion for developing cost effective websites.
                        All my work meets W3C standards to ensure accessibility, SEO and supported in all major web browsers. My coding is hand written, clean, W3C compliant, cross browser compatible and search engine friendly. I understand the importance of project deadlines and will make sure your project is delivered on time, every time.
                        I am passionate about my work and having an extensive experience in web development and design. I always recommended the best technologies to my clients and specialise in modern content management systems allowing clients to easily update their own websites.
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img className='img-fluid' src={prorfile} alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Full Stack Developer</h3>
                        {/* <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p> */}
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>20 Nov 1992</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://sundersj.github.io/</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91-9306240152</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Gurgaon, India</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor ( Computer Science )</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>sundersjangra789@gmail.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        {/* <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </p> */}
                    </div>
                </div>

            </div>
        </section>);
}

export default SectionAbout;
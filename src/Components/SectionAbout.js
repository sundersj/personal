
import prorfile from '../img/profile-img.jpg';

const SectionAbout = () =>
{
    return (

        // < !-- ======= About Section ======= -->
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <div className='mb-3'>
                        Well-qualified Laravel Full Stack Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of process with ease. Collaborative team player with excellent technical abilities offering 5+ years of related experience.
                    </div>
                    <div className='mb-3'>
                        Skilled in directing development with a creative and performance-oriented approach. Well-organized and customer-focused with proven skills in project management and team leadership.
                    </div>
                    <div className='mb-3'>
                        Experienced in producing and updating web and mobile-based applications. Optimizes structures and processes to accomplish customer targets and promote company loyalty. Expert in diverse programming languages.
                    </div>
                    <div className='mb-3'>
                        Accomplished in troubleshooting and resolving issues by debugging programs and managing. Increase proficiencies through web development and design. Offering expertise in LARAVEL, PHP, OOP, API, JAVASCRIPT JQUERY  and REACT and many more.
                    </div>
                    <div className='mb-3'>
                        Talented Software Development leader experienced in producing and updating web based applications and systems. Optimizes structures and processes to accomplish customer targets and promote company loyalty. Expert in diverse programming languages.
                    </div>
                    <div className='mb-3'>
                        Complex problem-solver with analytical and driven mindset. Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code.
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img className='img-fluid' src={prorfile} alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Laravel Full Stack Developer</h3>
                        {/* <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p> */}
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>20 Nov 1992</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>https://sundersj.github.io/personal</span></li>
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
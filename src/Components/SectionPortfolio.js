import { Link, useNavigate } from 'react-router-dom';
import portfolio_1 from '../img/portfolio/portfolio-1.jpg';
import portfolio_2 from '../img/portfolio/portfolio-2.jpg';
import portfolio_3 from '../img/portfolio/portfolio-3.jpg';
import portfolio_4 from '../img/portfolio/portfolio-4.jpg';
import portfolio_5 from '../img/portfolio/portfolio-5.jpg';
import portfolio_6 from '../img/portfolio/portfolio-6.jpg';
// import portfolio_7 from '../img/portfolio/portfolio-7.jpg';
// import portfolio_8 from '../img/portfolio/portfolio-8.jpg';
// import portfolio_9 from '../img/portfolio/portfolio-9.jpg';

const SectionPortfolio = () =>
{
    // let navigate = useNavigate();

    // const handleNavigate = (id) =>
    // {
    //     navigate(`/portfolio/${id}`);

    // }

    return (

        // < !-- ======= Portfolio Section ======= -->
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Please see my recently completed projects</p>
                </div>
                {/* <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                    </div>
                </div> */}

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap p_bg_1">
                            <div className="portfolio-links">
                                {/* <Link className="portfolio-lightbox" to='portfolio/1'>
                                    <i className="bx bx-plus"></i>
                                </Link> */}
                                <a href="http://realtraker.com/" target='_blank' title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap p_bg_2">
                            <div className="portfolio-links">
                                {/* <Link className="portfolio-lightbox" to='portfolio/2'>
                                    <i className="bx bx-plus"></i>
                                </Link> */}
                                <a href="http://realtraker.com/" target='_blank' title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap p_bg_3">
                            <div className="portfolio-links">
                                {/* <Link className="portfolio-lightbox" to='portfolio/3'>
                                    <i className="bx bx-plus"></i>
                                </Link> */}
                                <a href="http://app.realtraker.com/" target='_blank' title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap p_bg_4">
                            <div className="portfolio-links">
                                {/* <Link className="portfolio-lightbox" to='portfolio/4'>
                                    <i className="bx bx-plus"></i>
                                </Link> */}
                                <a href="https://unecnew.zerobyte.site/" target='_blank' title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src={portfolio_5} className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                {/* <Link className="portfolio-lightbox" to='portfolio/5'>
                                    <i className="bx bx-plus"></i>
                                </Link> */}
                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src={portfolio_6} className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                {/* <Link className="portfolio-lightbox" to='portfolio/6'>
                                    <i className="bx bx-plus"></i>
                                </Link> */}
                                <a href="https://unecnew.zerobyte.site/" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-links">
                                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>
        </section >

    );
}

export default SectionPortfolio;
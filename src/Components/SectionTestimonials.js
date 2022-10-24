// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const SectionTestimonials = () =>
{
    return (

        // < !-- ======= Testimonials Section ======= -->
        <section id="testimonials" className="testimonials section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Testimonials</h2>
                </div>

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        pagination
                        spaceBetween={50}
                        slidesPerView={3}>

                        <SwiperSlide><div className="testimonial-item" data-aos="fade-up">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Sunder did a fantastic job on my project. He was diligent, highly responsive, and went well above and beyond the call of duty to ensure that my project was successful. His communication was top-notch, he met all deadlines, and his skills were reasonably strong.I look forward to working with him again on future projects.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                            <h3>Upwork's Client</h3>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="testimonial-item" data-aos="fade-up">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Very talented developer, highly recommended!
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                            <h3>Upwork's Client</h3>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="testimonial-item" data-aos="fade-up">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Highly recommend working with Sunder. He was such a pleasure to deal with, very communicative and always adhered to deadlines. Overall, his work ethic is great and keeps updated on the progress well.
                                He put so much hard work to get the work done in time and with high quality
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                            <h3>Upwork's Client</h3>
                        </div>
                        </SwiperSlide>
                        <div class="swiper-pagination"></div>
                    </Swiper>
                </div>
            </div>
        </section >

    );
}

export default SectionTestimonials;
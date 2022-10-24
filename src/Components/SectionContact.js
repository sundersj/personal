
const SectionContact = () =>
{
    return (

        // < !-- ======= Contact Section ======= -->
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>You can contact me via phone call, email or can ping me at skype</p>
                </div>
                <div className="row" data-aos="fade-in">
                    <div className="col d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>
                                    Flat No:- 217, 2nd Floor, Sukh Residency
                                    <br /> Sukhrali Enclave, Gurgaon, India
                                    <br />
                                    Postal Code:-  122001,
                                </p>
                            </div>
                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>sunderjangra789@gmail.com</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-skype"></i>
                                <h4>Skype:</h4>
                                <p>https://join.skype.com/invite/wWBIgWKnPMqk</p>
                            </div>
                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+91-9306240152</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9315366270994!2d77.05398891540972!3d28.4816083976457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19f3187824ff%3A0x282289ffb38b0f9f!2sSukh%20Residency!5e0!3m2!1sen!2sin!4v1666590848076!5m2!1sen!2sin"
                            frameBorder="0"
                            style={{ border: '0', width: '100%', height: '100%' }}
                        >
                        </iframe>
                    </div>
                    {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required />
                            </div>
                            <div className="form-group">
                                <label for="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div> */}
                </div>
            </div>
        </section >

    );
}

export default SectionContact;
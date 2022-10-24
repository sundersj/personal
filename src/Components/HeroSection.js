import Typed from "typed.js";
import { useEffect, useRef } from "react";

const HeroSection = () =>
{

    const el = useRef(null);

    useEffect(() =>
    {
        const typed = new Typed(el.current, {
            strings: ["Full Stack Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,

        });

        // Destropying
        return () =>
        {
            typed.destroy();
        };
    }, []);


    return (
        // < !-- ======= Hero Section ======= -->
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Sunder Singh</h1>
                <p> I'm <span ref={el} className='typed'></span></p>
            </div>
        </section>
    );
}

export default HeroSection;
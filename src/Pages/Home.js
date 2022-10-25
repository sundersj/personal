import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import SectionAbout from '../Components/SectionAbout';
import SectionFacts from '../Components/SectionFacts';
import SectionSkills from '../Components/SectionSkills';
import SectionResume from '../Components/SectionResume';
import SectionPortfolio from '../Components/SectionPortfolio';
import SectionServices from '../Components/SectionServices';
import SectionTestimonials from '../Components/SectionTestimonials';
import SectionContact from '../Components/SectionContact';

const Home = () =>
{
    return (
        <>
            <Header />

            <HeroSection />

            <main id="main">
                <SectionAbout />

                {/* <SectionFacts /> */}

                <SectionSkills />

                <SectionResume />

                <SectionPortfolio />

                {/* <SectionServices /> */}
                <SectionTestimonials />

                <SectionContact />

            </main>
        </>

    );
}

export default Home
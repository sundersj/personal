
import './App.scss';

import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import SectionAbout from './Components/SectionAbout';
import SectionFacts from './Components/SectionFacts';
import SectionSkills from './Components/SectionSkills';
import SectionResume from './Components/SectionResume';
import SectionPortfolio from './Components/SectionPortfolio';
import SectionServices from './Components/SectionServices';
import SectionTestimonials from './Components/SectionTestimonials';
import SectionContact from './Components/SectionContact';

function App()
{
	return (
		<div className="App">
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

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;

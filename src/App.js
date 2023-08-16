import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import PageNotfound from './Pages/404';
import PortfolioDetail from './Pages/Portfolio';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

function App()
{
	return (
		<div className="App">
			<Routes>
				<Route path="/personal" element={<Home />} />
				<Route path="portfolio/:id" element={<PortfolioDetail />} />
				<Route path="*" element={<PageNotfound />} />
			</Routes>
		</div>
	);
}

export default App;

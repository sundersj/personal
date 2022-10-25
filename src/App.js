import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import PageNotfound from './Pages/404';
import PortfolioDetail from './Pages/Portfolio';


function App()
{
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="portfolio/:id" element={<PortfolioDetail />} />

				<Route path="*" element={<PageNotfound />} />
			</Routes>
		</div>
	);
}

export default App;

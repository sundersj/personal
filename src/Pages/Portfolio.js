import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Components/Header";
import Portfolio_1 from "../Components/portfolio/Portfolio_1";
import Portfolio_2 from "../Components/portfolio/Portfolio_2";
import Portfolio_3 from "../Components/portfolio/Portfolio_3";
import Portfolio_4 from "../Components/portfolio/Portfolio_4";
import Portfolio_5 from "../Components/portfolio/Portfolio_5";
import Portfolio_6 from "../Components/portfolio/Portfolio_6";

const PortfolioDetail = () =>
{


    const params = useParams();
    const [portfolio, setPortfolio] = useState(params.id);

    return (
        <>
            <Header />
            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Portfoio Details</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Portfoio Details</li>
                            </ol>
                        </div>
                    </div>
                </section>

                {portfolio === 1 && <Portfolio_1 />}
                {portfolio === 2 && <Portfolio_2 />}
                {portfolio === 3 && <Portfolio_3 />}
                {portfolio === 4 && <Portfolio_4 />}
                {portfolio === 5 && <Portfolio_5 />}
                {portfolio === 6 && <Portfolio_6 />}

            </main>
        </>


    );
}

export default PortfolioDetail;
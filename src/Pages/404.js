import { Link } from 'react-router-dom';
import not_found from '../img/not-found.svg'


const PageNotfound = () =>
{
    return (<main>
        <div className="container">
            <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1>404</h1>
                <h2>The page you are looking for doesn't exist.</h2>
                <Link className="btn" to='/'>Back to home</Link>
                <img src={not_found} style={{ maxHeight: '300px' }} className="img-fluid py-5" alt="Page Not Found" />
            </section>
        </div>
    </main>);
}

export default PageNotfound;
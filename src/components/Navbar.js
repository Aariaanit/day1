import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Shkolla Digjitale</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/project">Project</a> */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create">Create</Link>
                <Link to="/project">Project</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

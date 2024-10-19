import { Link } from 'react-router-dom';
import './Header.css'; // Create this CSS file to style the header

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/hobbies">Hobbies</Link></li>
          <li><Link to="/family">Family</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
          <li><Link to="/contributions">Contributions</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

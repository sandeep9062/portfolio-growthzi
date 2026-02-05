import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="portfolio-navbar">
      <div className="portfolio-nav-brand">ROBERT GARCIA</div>
      <div className="portfolio-nav-menu">
        <a href="#work" className="portfolio-nav-item">Work</a>
        <a href="#about" className="portfolio-nav-item">About</a>
        <a href="#contact" className="portfolio-nav-item">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;

import "bulma/css/bulma.min.css";


const Hero = () => {
    return (
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <h1 className="title has-text-white">बेड बघ</h1>
          </a>
        </div>
  
        <div className="navbar-end">
          <a
            href="https://github.com/ArchKudo/bed-bugh"
            className="navbar-item has-text-white"
          >
            GitHub
          </a>
          <a href="#faq" className="navbar-item has-text-white">
            FAQ
          </a>
        </div>
      </nav>
    );
  };

export default Hero;
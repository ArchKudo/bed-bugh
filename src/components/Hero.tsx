import "bulma/css/bulma.min.css";
import {id as faqID} from "./FAQ";


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
          {/* TODO: Use native react references? */}
          <a href={`#${faqID}`} className="navbar-item has-text-white">
            FAQ
          </a>
        </div>
      </nav>
    );
  };

export default Hero;
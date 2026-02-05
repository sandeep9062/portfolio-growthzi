import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <footer className="portfolio-contact-footer" id="contact">
      <div className="portfolio-contact-grid">
        {/* Left Side: Call to Action */}
        <div className="portfolio-contact-info">
          <h2 className="portfolio-contact-heading">LET'S CONNECT</h2>
          <div className="portfolio-contact-sub">
            Say hello at{" "}
            <a href="mailto:robertgarcia@gmail.com" className="portfolio-email-link">
              robertgarcia@gmail.com
            </a>
          </div>
          <div className="portfolio-contact-sub">
            For more info, here's my{" "}
            <a href="#" className="portfolio-resume-link">
              resume
            </a>
          </div>

          <div className="portfolio-social-icon-row">
            <a href="#" className="portfolio-social-glyph" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="portfolio-social-glyph" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="portfolio-social-glyph" aria-label="Twitter/X">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#" className="portfolio-social-glyph" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="portfolio-contact-form-container">
          <form className="portfolio-contact-form">
            <div className="portfolio-input-group">
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="portfolio-input-group">
              <label>Email</label>
              <input type="email" />
            </div>

            <div className="portfolio-input-group">
              <label>Subject</label>
              <input type="text" />
            </div>

            <div className="portfolio-input-group">
              <label>Message</label>
              <textarea rows={6}></textarea>
            </div>

            <button type="submit" className="portfolio-submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div className="portfolio-copyright">© 2023 Robert Garcia</div>
    </footer>
  );
};

export default Contact;

import './About.css';

const About = () => {
  return (<div id="about" className='portfolio-about-container'>
    <section className="portfolio-about-section">
      {/* About Me Sub-section */}
      <div className="portfolio-about-grid">
        <div className="portfolio-about-left">
          <h2 className="portfolio-section-heading">ABOUT ME</h2>
        </div>
        <div className="portfolio-about-right">
          <div className="portfolio-about-lead-text">
            I am a front-end developer based in Sydney. Has Mechanical Engineering background.
          </div>
          <div className="portfolio-about-description">
            I am a front-end developer based in Sydney looking for exciting opportunities. Has 
            Mechanical Engineering background. Likes to focus on accessibility when developing. 
            Passionate and curious about solving problems. Currently, I'm exploring Reactjs, 
            Webflow and a bit of Designing. While I am not programming, I enjoy playing football, 
            photography and playing Valorant. Learning more to improve skill.
          </div>
          
          <div className="portfolio-about-actions">
            <button className="portfolio-download-pill">
              DOWNLOAD RESUME <span className="portfolio-pill-dot"></span>
            </button>
            <div className="portfolio-social-circles">
              <a href="#" className="portfolio-circle-link">in</a>
              <a href="#" className="portfolio-circle-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

     

      {/* Capabilities Sub-section */}
      <div className="portfolio-about-grid portfolio-capabilities-section">
        <div className="portfolio-about-left">
          <h2 className="portfolio-section-heading">MY CAPABILITIES</h2>
        </div>
        <div className="portfolio-about-right">
          <div className="portfolio-capabilities-description">
            I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. 
            Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
          </div>
          
        </div>
      </div> 
    </section>

    <div className="portfolio-section-divider"></div></div>
  );
};

export default About;

import "./FeaturedProjects.css";

const projects = [
  {
    tag: "Conceptual Work",
    title: "Promotional landing page for our favorite show",
    description:
      "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
    year: "2023",
    role: "Front-end Developer",
    image: "/project85.png", // Replace with your image paths
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Blog site for World News",
    description:
      "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
    client: "World News",
    year: "2022",
    role: "Front-end Developer",
    image: "/project4.png",
    viewProject: "#",
  },
  {
    tag: "Challenge",
    title: "E-commerce product page",
    description:
      "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
    year: "2022",
    role: "Front-end Developer",
    image: "/project5.png",
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="portfolio-featured-project" id="work">
      <section className="portfolio-projects-container">
        <h2 className="portfolio-section-title">FEATURED PROJECTS</h2>
        <div className="portfolio-section-subtitle">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </div>

        <div className="portfolio-projects-list">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-project-item">
              {/* Left Column: Image Card */}
              <div className="portfolio-project-image-card">
                {project.tag && (
                  <span className="portfolio-project-tag">{project.tag}</span>
                )}
                <div className="portfolio-image-placeholder">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="portfolio-project-details">
                <h3>{project.title}</h3>
                <div className="portfolio-description">{project.description}</div>

                <div className="portfolio-project-info">
                  <h4>PROJECT INFO</h4>
                  {project.client && (
                    <div className="portfolio-info-row">
                      <span>Client</span>
                      <span>{project.client}</span>
                    </div>
                  )}
                  <div className="portfolio-info-row">
                    <span>Year</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="portfolio-info-row">
                    <span>Role</span>
                    <span>{project.role}</span>
                  </div>
                </div>

                <div className="portfolio-project-links">
                  {project.viewProject ? (
                    <a href={project.viewProject} className="portfolio-link-arrow">
                      VIEW PROJECT ↗
                    </a>
                  ) : (
                    <>
                      <a href={project.liveLink} className="portfolio-link-arrow">
                        LIVE DEMO ↗
                      </a>
                      <a href={project.githubLink} className="portfolio-link-github">
                        SEE ON GITHUB <i></i>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="portfolio-section-divider"></div>
    </div>
  );
};

export default Projects;

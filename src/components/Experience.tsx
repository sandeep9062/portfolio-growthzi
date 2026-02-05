
import "./Experience.css";

const Experience = () => {
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "JQUERY",
    "ACCESSIBILITY",
    "FIGMA",
    "TAILWIND CSS",
  ];

  const jobs = [
    {
      title: "Freelance Developer",
      date: "Nov 2023 — Present",
      description:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Front-End Intern",
      company: "Roos Tech",
      date: "Sep 2023 — Nov 2023",
      description:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section className="portfolio-exp-section">
      {/* Skills Tags Section */}
      <div className="portfolio-skills-container">
        {skills.map((skill) => (
          <span key={skill} className="portfolio-skill-tag">
            {skill}
          </span>
        ))}
      </div>

      {/* Experience Section */}
      <div className="portfolio-exp-grid">
        <div className="portfolio-exp-left">
          <h2 className="portfolio-exp-heading">MY EXPERIENCE</h2>
        </div>
        <div className="portfolio-exp-right">
          {jobs.map((job, index) => (
            <div key={index} className="portfolio-job-entry">
              <div className="portfolio-job-header">
                <h3 className="portfolio-job-title">{job.title}</h3>
                <span className="portfolio-job-date">{job.date}</span>
              </div>
              {job.company && <div className="portfolio-job-company">{job.company}</div>}
              <div className="portfolio-job-desc">{job.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React, { useState } from 'react';
import './App.css';
import img1 from './images/hands-trading.jpg';
import img2 from './images/headerpic.jpeg';

function App() {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  const [currentSection, setCurrentSection] = useState('About Me');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const projects = [
    { name: 'ThanksButNoThanks', image: img1, repoLink: 'https://github.com/JayC-06/GIFT-EXCHANGE-.git', deployLink: 'https://jayc-06.github.io/GIFT-EXCHANGE-/' },
    { name: 'Project 2', image: "test", repoLink: 'https://github.com', deployLink: 'https://github.com' },
    { name: 'Project 3', image: "test", repoLink: 'https://github.com', deployLink: 'https://github.com' },
    { name: 'Project 4', image: "test", repoLink: 'https://github.com', deployLink: 'https://github.com' },
    { name: 'Project 5', image: "test", repoLink: 'https://github.com', deployLink: 'https://github.com' },
    { name: 'Project 6', image: "test", repoLink: 'https://github.com', deployLink: 'https://github.com' },
  ]

  const handleNavClick = (section) => {
    setCurrentSection(section);
    setFormErrors({});
  };

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleBlur = (field) => {
    const errors = { ...formErrors };
    if (!formData[field]) {
      errors[field] = `${field} is required`;
    } else if (field === 'email' && !validateEmail(formData.email)) {
      errors.email = 'Invalid email address';
    } else {
      delete errors[field];
    }
    setFormErrors(errors);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
console.log(img2)

  return (
    <div className="app">
      {/* Header */}
      <header className='header-image'>
        
        
        <h1>Joshua Contreras</h1>
        <nav>
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={currentSection === section ? 'active' : ''}
            >
              {section}
            </button>
          ))}
        </nav>
      </header>

      {/* Content Section */}
      <main>
        {currentSection === 'About Me' && (
          <section>
            <h2>About Me</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Developer"
              className="avatar"
            />
            <p>
              Hi! I'm Joshua Contreras, a passionate web developer skilled in building
              full-stack applications. I love React and Node.js!
            </p>
          </section>
        )}

        {currentSection === 'Portfolio' && (
          <section>
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <div className="portfolio-item" key={index} style={{backgroundImage: `url(${project.image})`}}>
                <div className="portfolio-title">
                  <h3>{project.name}</h3>
                  </div>
                  <div className="portfolio-links">
                    <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                      Deployed App
                    </a>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      GitHub Repo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {currentSection === 'Contact' && (
          <section>
            <h2>Contact Me</h2>
            <form className = "contact-form">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                />
                {formErrors.name && <p className="error">{formErrors.name}</p>}
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                />
                {formErrors.email && <p className="error">{formErrors.email}</p>}
              </div>
              <div>
                <label>Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                ></textarea>
                {formErrors.message && <p className="error">{formErrors.message}</p>}
              </div>
              <button type="submit" id="submit">Submit</button>
            </form>
          </section>
        )}

        {currentSection === 'Resume' && (
          <section>
            <h2>Resume</h2>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
            </ul>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
          Stack Overflow
        </a>
      </footer>
    </div>
  );
}

export default App;

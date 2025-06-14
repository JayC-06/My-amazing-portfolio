import React, { useState } from 'react';
import './App.css';
import img1 from './images/hands-trading.jpg';
import img2 from './images/headerpic.jpeg';
import img3 from './images/resumepilot.png';
import img4 from './images/ChefBuddy.png';

function App() {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  const [currentSection, setCurrentSection] = useState('About Me');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const projects = [
    { name: 'ThanksButNoThanks', image: img1, repoLink: 'https://github.com/JayC-06/GIFT-EXCHANGE-.git', deployLink: 'https://jayc-06.github.io/GIFT-EXCHANGE-/' },
    { name: 'ResumePilot', image: img3, repoLink: 'https://github.com/Jarred13D/ResumePilot.git', deployLink: 'https://resumepilot-r1lo.onrender.com/' },
    { name: 'Chef Buddy', image: img4, repoLink: 'https://github.com/JayC-06/My-amazing-portfolio.git', deployLink: 'https://chefbuddy-as26.onrender.com/' },
    // { name: 'Project 4', image: "test", repoLink: 'https://github.com', deployLink: 'https://github.com' },
    // { name: 'Project 5', image: "test", repoLink: 'https://github.com', deployLink: 'https://github.com' },
    // { name: 'Project 6', image: "test", repoLink: 'https://github.com', deployLink: 'https://github.com' },
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
      <main className='coding-image'>
        {currentSection === 'About Me' && (
          <section>
            <h2>About Me</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Developer"
              className="avatar"
            />
            <p style={{ backgroundColor: '#0fb3e6', padding: '1rem', borderRadius: '8px', fontSize: '1.4rem', color: 'black' }}>
              Hi! I'm Joshua Contreras — I am a recent software engineering graduate with a deep-rooted background in health, wellness, and atheletic performance. 
              Before diving into the world of tech, I spent over a decade in the healthcare and fitness industries, serving as an FDNY EMT, a licensed medical massage therapist, 
              and a NASM-certified personal trainer. I founded Anatomy Mechanic Therapeutic Training, where I specialized in postural restoration therapy, applied integration, 
              and rapid neurological treatment for pain. My work was driven by a desire to understand and optimize the human body — a curiosity that now fuels my journey into software development.
              I’m currently focused on front-end development with React, HTML, CSS and combining creative problem-solving with user-centered design. Just like in my previous career, I love building 
              systems that help people feel better, move better — and now, work better through technology.
              Let’s build something meaningful together.
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
              Download Resume Here!
            </a>
            <ul>
              
              <div style={{ backgroundColor: '#0fb3e6', padding: '3rem', borderRadius: '8px', fontSize: '1.4rem', color: 'black' }}>
                <p> Experience in</p>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
           </div> 
           </ul>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer>
        <a href="https://github.com/JayC-06?tab=repositories" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/joshua-contreras-8653331b3/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
          Stack Overflow
        </a> */}
      </footer>
    </div>
  );
}

export default App;

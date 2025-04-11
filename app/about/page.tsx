
'use client';
import Image from 'next/image';

export default function About() {
    
  return (
    <main id="page-top">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Wen-Liang Huang(Matt Huang)</span>
          <span className="d-none d-lg-block">
            <Image
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="/assets/img/matt_profile.jpg"
              alt="Profile"
              width={150}
              height={150}
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">
                Patent
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container-fluid p-0">
        {/* About Section */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Wen-Liang <span className="text-primary">Huang</span>
            </h1>
            <div className="subheading mb-5">
              (886) 983068287 ·{' '}
              <a href="mailto:wenliangmatt@email.com">wenliangmatt@gmail.com</a>
            </div>
            <p className="lead mb-5">
            I HAVE FIVE YEARS OF SOFTWARE DEVELOPMENT EXPERIENCE, FOCUSING ON DATA PROCESSING, CLOUD ARCHITECTURE, WEB DEVELOPMENT, AND ARTIFICIAL INTELLIGENCE. I EXCEL IN INTER-DEPARTMENTAL COMMUNICATION, LEADING TO NUMEROUS CROSS-DEPARTMENTAL PROJECTS AND OVER SIX PATENTS. I THINK THAT I AM A DEVOPS ENGINEER
            </p>
            <div className="social-icons">
              <a className="social-icon" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Experience */}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Senior Software Engineer</h3>
                    <div className="subheading mb-3">Chatbot AI Agent</div>
                    <ul>
                      <li>Retrained LLM models using data to generate new models and productized the new models</li>
                      <li>Embedding RAG to LLM and optimize a privacy chatbot for internal staff</li>
                      <li>Build Agentic AI Tools to help users to find the best solution</li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0"><span className="text-primary">July 2023 - Present</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">Software Engineer</h3>
                      <div className="subheading mb-3">Cloud Service Architect</div>
                        <ul>
                          <li>Developed and deployed cloud architecture.</li>
                          <li>Developed and analyzed data using C++/C#/Python.</li>
                          <li>Uploaded on-premises full-stack web applications and data to the cloud. (AWS,Azure)</li>
                        </ul>
                    </div>
                  <div className="flex-shrink-0"><span className="text-primary">October 2021 - June 2023</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">SOFTWARE ENGINEER</h3>
                      <div className="subheading mb-3">Web Frontend Design</div>
                          <ul>
                            <li>Developed web front-end using ReactJS.</li>
                          </ul>
                      </div>
                      <div className="flex-shrink-0"><span className="text-primary">June 2021 - Septemper 2021</span></div>
                  </div>
                  <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                      <h3 className="mb-0">Research Assistant</h3>
                      <div className="subheading mb-3">Statics and Analyze Particle Physics </div>
                      <ul>
                        <li>Conducted data mining and statistical analysis at CERN for particle physics research.</li>
                      </ul>
                    </div>
                  <div className="flex-shrink-0"><span className="text-primary">December 2020 - May 2021</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                      <h3 className="mb-0">Web Developer</h3>
                      <div className="subheading mb-3">Develop Full Stack Web Page</div>
                      <ul>
                        <li>Conducted data mining and statistical analysis at CERN for particle physics research.</li>
                      </ul>
                    </div>
                  <div className="flex-shrink-0"><span className="text-primary">December 2020 - May 2021</span></div>
                </div>
              </div>
            </section>
        {/* Education Section */}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">National Taiwan University</h3>
                <div className="subheading mb-3">Master of Partical Physics</div>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">August 2017 - Novembor 2020</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">National Taiwan University</h3>
                <div className="subheading mb-3">Bachelor of Physics</div>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">August 2013 - Novembor 2016</span></div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="resume-section" id="skills">
          <div className='resume-section-content'>
            <h2 className="mb-5">Skills</h2>
            <div className='subheading mb-3'>Programming Languages &amp; Technologies</div>
            <ul className='list-inline dev-icons'>
              <li className='list-inline-item'>
                <i className='devicon-c-plain-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-cplusplus-plain-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-python-plain-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-csharp-plain-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-php-plain-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-javascript-plain colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-typescript-plain colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-react-original-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-nodejs-plain-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-go-original-wordmark colored'></i>
              </li>
            </ul>
            <div className='subheading mb-3'>DevOps</div>
            <ul className='list-inline dev-icons'>
              <li className='list-inline-item'>
                <i className='devicon-amazonwebservices-plain-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-azure-plain-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-docker-plain-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-kubernetes-plain-wordmark colored'></i>
              </li>
              <li className='list-inline-item'>
                <i className='devicon-gitlab-plain-wordmark colored'></i>
              </li>
            </ul>
            <div className='subheading mb-3'>Operating System</div>
              <ul className='list-inline dev-icons'>
                <li className='list-inline-item'>
                  <i className='devicon-linux-plain colored'></i>
                </li>
                <li className='list-inline-item'>
                  <i className='devicon-windows8-original colored'></i>
                </li>
                <li className='list-inline-item'>
                  <i className='devicon-apple-original colored'></i>
                </li>
              </ul>
          </div>
          
        </section>  
        {/* Patent Section */}
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Patent & Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Distinguish image in instant messaging app (ROC) 2022
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Use AI to quickly customize software for users in different countries (ROC) 2022
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Automated distributed version control software (ROC) 2022
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Wireless sharer with data caching function (ROC/China) 2023
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Windows Copilot Plugin Module and Customized (ROC) 2024
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Use the feedback by customer to optimize RAG (ROC/China) 2024
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Find user-related strategies through screen analysis (ROC/China/USA) 2024
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
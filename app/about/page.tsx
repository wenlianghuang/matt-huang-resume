'use client';
import Image from 'next/image';
import styles from './about.module.css'; // Updated import

export default function About() {
  return (
    <main id="page-top" className={styles.pageTop}>
      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg navbar-dark bg-primary fixed-top ${styles.sideNav}`} id="sideNav">
        <a className={`navbar-brand js-scroll-trigger ${styles.navbarBrand}`} href="#page-top">
          <span className="d-block d-lg-none">Clarence Taylor</span>
          <span className="d-none d-lg-block">
            <Image
              className={`img-fluid img-profile rounded-circle mx-auto mb-2 ${styles.profileImage}`}
              src="/assets/img/profile.jpg"
              alt="Profile"
              width={150}
              height={150}
            />
          </span>
        </a>
        <button
          className={`navbar-toggler ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.navbarResponsive}`} id="navbarResponsive">
          <ul className={`navbar-nav ${styles.navbarNav}`}>
            <li className={`nav-item ${styles.navItem}`}>
              <a className={`nav-link js-scroll-trigger ${styles.navLink}`} href="#about">
                About
              </a>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <a className={`nav-link js-scroll-trigger ${styles.navLink}`} href="#experience">
                Experience
              </a>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <a className={`nav-link js-scroll-trigger ${styles.navLink}`} href="#education">
                Education
              </a>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <a className={`nav-link js-scroll-trigger ${styles.navLink}`} href="#skills">
                Skills
              </a>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <a className={`nav-link js-scroll-trigger ${styles.navLink}`} href="#interests">
                Interests
              </a>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <a className={`nav-link js-scroll-trigger ${styles.navLink}`} href="#awards">
                Awards
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className={`container-fluid p-0 ${styles.containerFluid}`}>
        {/* About Section */}
        <section className={`resume-section ${styles.resumeSection}`} id="about">
          <div className={`resume-section-content ${styles.resumeSectionContent}`}>
            <h1 className={`mb-0 ${styles.name}`}>
              Clarence <span className={`text-primary ${styles.textPrimary}`}>Taylor</span>
            </h1>
            <div className={`subheading mb-5 ${styles.subheading}`}>
              3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·{' '}
              <a href="mailto:name@email.com" className={styles.email}>
                name@email.com
              </a>
            </div>
            <p className={`lead mb-5 ${styles.lead}`}>
              I am experienced in leveraging agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster collaborative
              thinking to further the overall value proposition.
            </p>
            <div className={`social-icons ${styles.socialIcons}`}>
              <a className={`social-icon ${styles.socialIcon}`} href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className={`social-icon ${styles.socialIcon}`} href="#!">
                <i className="fab fa-github"></i>
              </a>
              <a className={`social-icon ${styles.socialIcon}`} href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className={`social-icon ${styles.socialIcon}`} href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className={`m-0 ${styles.hr}`} />
        {/* Experience */}
        <section className={`resume-section ${styles.resumeSection}`} id="experience">
          <div className={`resume-section-content ${styles.resumeSectionContent}`}>
            <h2 className={`mb-5 ${styles.sectionTitle}`}>Experience</h2>
            {/* Experience content remains unchanged */}
          </div>
        </section>
        {/* Awards Section */}
        <section className={`resume-section ${styles.resumeSection}`} id="awards">
          <div className={`resume-section-content ${styles.resumeSectionContent}`}>
            <h2 className={`mb-5 ${styles.sectionTitle}`}>Awards & Certifications</h2>
            <ul className={`fa-ul mb-0 ${styles.awardsList}`}>
              <li>
                <span className={`fa-li ${styles.faLi}`}>
                  <i className={`fas fa-trophy text-warning ${styles.trophyIcon}`}></i>
                </span>
                Google Analytics Certified Developer
              </li>
              {/* Other awards remain unchanged */}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
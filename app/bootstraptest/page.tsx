"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function bootstraptest() {
  return (
    <div className="container mt-5">
      {/* 頭部區域 */}
      <header className="text-center">
        <h1 className="display-4">Your Name</h1>
        <p className="lead">Web Developer & Designer</p>
      </header>

      {/* 個人介紹 */}
      <section className="mt-4">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with experience in building
          high-quality websites and applications.
        </p>
      </section>

      {/* 工作經驗 */}
      <section className="mt-4">
        <h2>Experience</h2>
        <ul>
          <li>Frontend Developer - ABC Company (2022 - Present)</li>
          <li>Web Designer - XYZ Studio (2020 - 2022)</li>
        </ul>
      </section>

      {/* 技能 */}
      <section className="mt-4">
        <h2>Skills</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">HTML & CSS</h4>
                <p className="card-text">Expert in building responsive layouts.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">JavaScript</h4>
                <p className="card-text">Experience in ES6+, React, and Next.js.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">UI/UX Design</h4>
                <p className="card-text">Strong understanding of user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 聯絡資訊 */}
      <section className="mt-4 text-center">
        <h2>Contact</h2>
        <p>Email: example@email.com</p>
        <p>LinkedIn: linkedin.com/in/example</p>
      </section>
    </div>
  );
}
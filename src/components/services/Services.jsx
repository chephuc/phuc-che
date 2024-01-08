import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h2>
              <b>Web development</b>
            </h2>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <b>Front-end development:</b> create user-friendly, responsive
                front-end designs using HTML, CSS, JavaScript, ...
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <b>Back-end development:</b> build scalable back-end systems
                using Java and NestJs.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <b>Database management:</b> A full-stack developer can manage
                databases and perform tasks like database design, optimization,
                and maintenance.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <b>API development:</b> create RESTful APIs and integrate them
                with front-end and back-end systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <b>Deployment and testing:</b> ensure the smooth deployment of
                web applications and conduct testing to ensure it work as
                expected.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                <b>Continuous improvement:</b> continuously improve the web
                application by fixing bugs, adding new features, and optimizing
                performance.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

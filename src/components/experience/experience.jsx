import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import {
  FaHtml5,
  FaReact,
  FaCss3,
  FaBootstrap,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiMysql, SiDjango } from "react-icons/si";

function experience() {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* =======FRONTEND======= */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className='experience__details-icon'/>
              <div>
                <h4>BootStrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        {/* =======END OF FRONTEND======= */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiDjango className='experience__details-icon'/>
              <div>
                <h4>Django</h4>
              </div>
            </article>
          </div>
          {/* =======END OF BACKEND======= */}
        </div>
      </div>
    </section>
  );
}

export default experience;

import React from "react";
import style from "./AboutMe.module.css";
import MySkills from "../mySkills/MySkills";

const AboutMe = () => {
  return (
    <div id="About" className={style.AboutDiv}>
      <h3>About me</h3>
      <div className={style.divAboutAndSkills}>
        <div className={style.abouth4}>
          <h4>
           I'm an enthusiastic full-stack developer deeply immersed in the world of technology, driven by an unyielding commitment to continuous learning. My goal is to architect software solutions that solve intricate challenges, and I specialize in harnessing the power of technologies like JavaScript, React-Redux, Express, Node.js, and PostgreSQL to deliver streamlined and inventive outcomes.
          </h4>
          <h4>
          I am actively seeking to contribute my skills and knowledge to a vibrant software development team. My aspiration is to dedicate my utmost effort, in exchange for a fulfilling experience and ongoing personal and professional growth. My dedication to delivering quality, meticulous attention to detail, and adaptability positions me as a valuable asset in any development setting.
          </h4>
          <h4>
          Let's connect and explore possibilities for collaboration, innovation, and making a positive impact in the ever-evolving realm of technology.
          </h4>
        </div>
        <MySkills />
      </div>
    </div>
  );
};

export default AboutMe;

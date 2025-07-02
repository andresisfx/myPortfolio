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
              I'm a passionate frontend developer with a strong focus on crafting engaging and responsive user interfaces. I specialize in modern web technologies like JavaScript, React, Redux, and Material UI to build intuitive and scalable applications.
            </h4>
            <h4>
              I'm eager to contribute to dynamic development teams where I can apply my skills, grow professionally, and deliver meaningful user experiences. My commitment to clean code, attention to detail, and design-awareness allows me to bridge functionality with usability effectively.
            </h4>
            <h4>
              While my core strength lies in frontend development, I'm also familiar with backend tools like Node.js, Express, and PostgreSQL, which helps me collaborate efficiently across the full stack.
            </h4>
            <h4>
              Let's connect and explore ways to collaborate, innovate, and create impactful web experiences together.
            </h4>

        </div>
        <MySkills />
      </div>
    </div>
  );
};

export default AboutMe;

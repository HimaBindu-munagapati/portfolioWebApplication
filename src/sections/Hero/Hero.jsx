import React from "react";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/Bindu_Resume_Master.pdf";
import dplite from "../../assets/dp-lite.png";
import dpdark from "../../assets/dp-dark.png";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const heroImg = theme === "light" ? dplite : dpdark;
  return (
    <section id="hero" className={styles.container}>
      {/* Hero Section Starts */}
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Sai Hima Bindu"
        />
        <img
          src={themeIcon}
          alt="Color mode icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        />
      </div>
      {/* Hero Section Ends */}

      {/* Info Section Starts */}
      <div className={styles.info}>
        <h1>
          Sai Hima Bindu
          <br />
          Munagapati
        </h1>
        <h2>DevOps Engineer</h2>
        <span>
          <a href="https://www.linkedin.com/in/saihima/" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/HimaBindu-munagapati" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p className={styles.description}>
        Highly motivated and detail-oriented DevOps Engineer with a passion for automation and improving system performance.
        </p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

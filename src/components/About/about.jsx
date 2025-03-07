import "./about.css";
import Mypic from "../../assets/about-logo.avif";
// import Mypic from "../../assets/avatar-2.svg";
import Aboutbox from "./Aboutbox";

export default function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img
          src={Mypic}
          alt=""
          width="190"
          className="about__img"
          style={{
            borderRadius: "50%",
          }}
        />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I am Akrati Jain, well-versed in Frontend Development (React.js, JavaScript, Java, SQL, HTML, CSS, Tailwind) along with a strong grasp of Data Structures & Algorithms and Competitive Programming.
              <br />
              <br />I am Passionate and Curious about Programming. I have Built
              many Frontend Projects with the same technologies as well.{" "}
            </p>
            <a
              href="https://drive.google.com/file/d/1UuRDHgxFsk4ZoV_LUaF3GKN0KoITY7bR/view?usp=drive_link"
              className="btn"
            >
              Download CV
            </a>
          </div>

          {/* SKILLS */}
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React.js</h3>
                <span className="skills__number ">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage reactjs"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java</h3>
                <span className="skills__number ">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage nodejs"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__number ">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage mongoDB"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML/CSS/JS</h3>
                <span className="skills__number ">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">SQL</h3>
                <span className="skills__number ">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage cpp"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">DSA/CP</h3>
                <span className="skills__number ">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage dsa"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Aboutbox />
    </section>
  );
}

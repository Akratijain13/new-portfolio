import "./home.css";
import Mypic from "../../assets/DpAkrati.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./SrollDown";
import Shapes from "./Shapes";

export default function Home() {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img
          src={Mypic}
          alt="pic"
          width="190"
          height="190" 
          className="home__img"
          style={{ borderRadius: "50%" }}
        />
        <h1 className="home__name">Akrati Jain</h1>
        <span className="home__designation">I am a Frontend Developer</span>

        <HeaderSocials />
        <a href="#contact" className="btn">
          Want to Connect ?
        </a>
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
}

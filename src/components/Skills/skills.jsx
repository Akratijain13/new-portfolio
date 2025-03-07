import "./skills.css";
import framework from "../../assets/framework-logo.png";
import other from "../../assets/others-logo.png";
import language from "../../assets/lang-logo.png";
import database from "../../assets/sql-querying.jpg";

export default function skills() {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container grid">
        <div className="skills__card">
          <img src={framework} alt="" width="140" className="skills__img" />
          <h3 className="skills__title">Frameworks/Libraries</h3>
          <ul type="disc">
            <li className="skills__description">• React js</li>
            <li className="skills__description">• Redux </li>
            <li className="skills__description">• React Router</li>
            <li className="skills__description">• Express js</li>
            {/* <li className="skills__description">• Mongoose</li> */}
            <li className="skills__description">• TailwindCSS</li>
          </ul>
        </div>

        <div className="skills__card">
          <img
            src={language}
            alt=""
            width="140"
            className="skills__img"
            style={{
              borderRadius: "30%",
            }}
          />
          <h3 className="skills__title">Languages</h3>
          <ul type="disc">
            <li className="skills__description">• Javascript</li>
            <li className="skills__description">• HTML/CSS</li>
            {/* <li className="skills__description">• C++ </li> */}
            <li className="skills__description">• Java</li>
          </ul>
        </div>

        <div className="skills__card">
          <img
            src={database}
            alt=""
            width="140"
            className="skills__img"
            style={{
              borderRadius: "30%",
            }}
          />
          <h3 className="skills__title">Database</h3>
          <ul type="disc">
            {/* <li className="skills__description">• MongoDB</li> */}
            <li className="skills__description">• SQL </li>
          </ul>
        </div>

        <div className="skills__card">
          <img
            src={other}
            alt=""
            width="140"
            className="skills__img"
            style={{
              borderRadius: "30%",
            }}
          />
          <h3 className="skills__title">Others</h3>
          <ul type="disc">
            <li className="skills__description">• Rest API's</li>
            <li className="skills__description">• Competitive Programming </li>
            <li className="skills__description">• Data Structures</li>
            <li className="skills__description">• Git/Github</li>
            <li className="skills__description">• OOPs</li>
          </ul>
        </div>
      </div>
      {/* <div className="skills__container grid">
        {data.map(({id,image,title,description})=>{
          return (
            <div className="skills__card" key={id}>
              <img src = {image} alt = "" className="skills__img"/> 
              <h3 className="skills__title">{title}</h3>
              <p className="skills__description">{description}</p>

            </div>
          );
        })}
      </div> */}
    </section>
  );
}

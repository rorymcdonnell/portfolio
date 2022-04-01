import "./about.css";
import Me from "../../img/work-photo.jpg";
import Dna from "../../img/dna-helix.svg";
import RightArrow from "../../img/right-arrow.svg";
import Coding from "../../img/coding.svg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Genetics graduate with a passion for coding.</p>
        <p className="a-desc">
          After studying genetics I was intrigued by a programming module that
          has shaped my career choice ever since. Since moving to Spain I have
          been developing websites for small businesses using WordPress, HTML,
          CSS and JavaScript. I wanted to push on with programming so enrolled
          at Nortcoders coding bootcamp where I learned to be a full stack
          developer. In my first junior front end developer role at Malinko I
          have been developing client dashboards using React to help NHS
          customers understand how much capacity they have available within a
          given team.
        </p>
        <div className="a-award">
          <img src={Dna} alt="" className="a-award-img" />
          <img src={RightArrow} alt="" className="a-award-img" />
          <img src={Coding} alt="" className="a-award-img coding-img" />
        </div>
      </div>
    </div>
  );
};

export default About;

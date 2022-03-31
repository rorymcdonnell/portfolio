import "./about.css";
import Award from "../../img/award.png";
import Me from "../../img/me.png";

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
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">skgjndfkgjnfkgjn</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

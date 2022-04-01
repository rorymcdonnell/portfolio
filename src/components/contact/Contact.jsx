import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j2vgl1v",
        "template_ok04kil",
        formRef.current,
        "XoE17JoDh3P5yZQg-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Want to hire me? Get in touch!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <a href="tel:+34674741160">+34 674 741 160</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a href="mailto:rorymcdonnell95@gmail.com">
                rorymcdonnell95@gmail.com
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Valencia, Spain
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Drop me a line</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you for your message, I will reply ASAP..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import "../contact/contact.scss";
import { Instagram, GitHub, LinkedIn } from "@mui/icons-material";
import { useSelector } from "react-redux";
// import emailParams from "../../data/email-params";
// import emailjs from "@emailjs/browser";
// import { useState } from "react";

export default function Contact() {
  const { lang } = useSelector((state) => state);
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const validateEmail = (email) => {
  //   var re = /\S+@\S+\.\S+/;
  //   return re.test(email);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevents default refresh by the browser

  //   if (email.length <= 0 || !validateEmail(email)) {
  //     alert("Please enter a valid email.");
  //   } else if (message.length <= 0) {
  //     alert("Message field can't be empty.");
  //   } else {
  //     validateEmail(email);

  //     emailjs
  //       .sendForm(
  //         emailParams.SERVICE_ID,
  //         emailParams.TEMPLATE_ID,
  //         e.target,
  //         emailParams.USER_ID
  //       )
  //       .then(
  //         (result) => {
  //           alert("Message Sent, We will get back to you shortly", result.text);
  //         },
  //         (error) => {
  //           alert("An error occurred, Please try again", error.text);
  //         }
  //       );

  //     e.target.reset();
  //   }
  // };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact-text">
          <h1>{lang === "en" ? "contact" : "contactar"}</h1>
          <p>
            {lang === "en"
              ? "Thank you for visiting my portfolio."
              : "Obrigado por visitares o meu portfolio"}
          </p>
          <p>
            {lang === "en"
              ? "If you're interested in getting in contact, please send me an email or access my social medias."
              : "Se estás interessado em contactar me, por favor envia um email ou acede às minhas redes sociais."}
          </p>
          <p className="email">joaodrlemos@gmail.com</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/johny_lemings/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://github.com/joaodrlemos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/joaodrlemos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="> email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder={lang === "en" ? "> subject" : "> assunto"}
            name="subject"
          />
          <textarea
            placeholder={lang === "en" ? "> message" : "> mensagem"}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">{lang === "en" ? "send" : "enviar"}</button>
        </form>
      </div> */}
    </div>
  );
}

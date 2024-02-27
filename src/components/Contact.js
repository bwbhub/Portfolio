import "../styles/components/contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export default function Contact() {
  const contactRef = useRef();
  const form = useRef();

  const resetform = () => {
    document.getElementById("contact-form").reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_arbabl9", "template_rjjqcpv", form.current, {
        publicKey: "BVQ_t_db2iiNwEVPK",
      })
      .then(
        () => {
          resetform();
          toast.success("Email sent !");
          console.log("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <section ref={contactRef} id="contact">
      <h2 className="title">Contact</h2>
      <div className="content">
        <p className="des">Feel free to contact me.</p>
        <Toaster position="bottom-center" />
        <form ref={form} onSubmit={sendEmail} id="contact-form">
          <div className="user-box">
            <label htmlFor="from_name">Name</label>
            <input type="text" name="from_name" id="from_name" required />
          </div>
          <div className="user-box">
            <label htmlFor="email_id">Email</label>
            <input type="email" name="email_id" id="email_id" required />
          </div>
          <div className="user-box">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required />
          </div>
          <input type="submit" value="Send" className="submit-form" />
        </form>
      </div>
    </section>
  );
}

import "./ContactForm.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { name, email, number } = user;

    try {
      if (name.length === 0 || email.length === 0 || number.length === 0) {
        toast.warning("Make sure to fill all the fields.");
        return;
      }

      const res = await fetch("/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, number, email }),
      });

      if (res.status === 400) {
        toast.error("Something isn't right. Try refreshing!");
      } else {
        setUser({ name: "", email: "", number: "" });
        toast.success("Subscribed!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-form">
      <div className="cf-left">
        <div className="cf-title">Get Updated</div>
        <span>Provide us with your details. We will contact you.</span>
      </div>
      <div className="cf-right">
        <form onSubmit={submitHandler} method="POST" autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="con-i"
            onChange={handleForm}
            value={user.name}
          />
          <input
            type="number"
            name="number"
            placeholder="Phone Number"
            className="con-i"
            onChange={handleForm}
            value={user.number}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="con-i"
            onChange={handleForm}
            value={user.email}
          />
          <button type="submit" className="s-btn">
            Submit
          </button>
          <ToastContainer
            toastStyle={{ backgroundColor: "#97ca00", color: "#fff" }}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

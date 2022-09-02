import { useState } from "react";

import AppImage from "../images/appImage.jpeg";
import MainLogoFooter from "../images/mainLogoFooter.png";
import CvUpload from "../images/cvUpload.png";
import axios from "axios";
import "./Application.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Application = () => {
  let [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    number: "",
    qualification: "",

    filename: "",
    formData: new FormData(),
  });

  let { formData } = data;

  const inputHandler = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = name === "filename" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setData({ ...data, [name]: value });
  };

  //////////////////////////////////////////////////////////////////////////////////////////

  const submitHandler = async (e) => {
    e.preventDefault();
    const { fname, lname, email, number, dob, qualification, filename } = data;
    if (filename.size > 1049000) {
      toast.warning("File must be less than 1MB");
      return;
    }

    if (
      !fname ||
      !lname ||
      !email ||
      !number ||
      !dob ||
      !qualification ||
      !filename
    ) {
      toast.warning("Fill all the data");
    } else {
      const config = {
        headers: {
          ContentType: "multipart/form-data",
        },
      };

      const res = await axios
        .post("/register", formData, config)
        .catch((err) => {
          toast.error("Something went wrong. Try refreshing");
        });

      if (res.data.status === 401 || !res.data) {
        toast.error("Errror");
      } else {
        setData({
          fname: "",
          lname: "",
          email: "",
          dob: "",
          number: "",
          qualification: "",

          filename: "",
          formData: new FormData(),
        });
        toast.success("Sucessfully Registered!!!");
        window.location.reload(false);
      }
    }
  };

  return (
    <div className="a-wrapper">
      <div className="a-left">
        <img src={AppImage} alt="" />
      </div>
      <div className="a-right">
        <div className="a-rightParent">
          <div className="a-mainLogo">
            <a href="/">
              <img src={MainLogoFooter} alt="" />
            </a>
          </div>
          <h1 className="sectionTitle">Application Form</h1>
          <div className="appForm-wrapper">
            <form method="POST" autoComplete="off">
              <div className="input-sec">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="John"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.fname}
                />
              </div>
              <div className="input-sec">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Smith"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.lname}
                />
              </div>
              <div className="input-sec">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@mail.com"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.email}
                />
              </div>
              <div className="input-sec">
                <label htmlFor="dop">Date Of Birth</label>
                <input
                  type="date"
                  name="dob"
                  id="dop"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.dob}
                />
              </div>
              <div className="input-sec">
                <label htmlFor="cnum">Phone Number</label>
                <input
                  type="text"
                  name="number"
                  id="cnum"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.number}
                />
              </div>
              <div className="input-sec">
                <label htmlFor="qualification">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  className="app-i"
                  onChange={inputHandler}
                  value={data.qualification}
                />
              </div>
              <div className="upload-wrapper">
                <div className="upload-parent">
                  <div>
                    <img src={CvUpload} alt="upload your cv" />
                  </div>
                  <div className="upload-txt">
                    <p>Upload your CV </p>
                  </div>
                  <input type="file" name="filename" onChange={inputHandler} />
                </div>
              </div>
              <div className="a-btn-wrapper">
                <div className="a-btn">
                  <button type="submit" onClick={submitHandler}>
                    Submit
                  </button>
                </div>
              </div>
              <ToastContainer
                toastStyle={{ backgroundColor: "#97ca00", color: "#fff" }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;

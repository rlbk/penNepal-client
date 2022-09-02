import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //Handle input
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  //Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;
    try {
      // const res = await fetch("/login-to-database/api/email-password", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //   }),
      // });

      if (email === "info@pennepaledu.com" && password === "pn-pwd-@123") {
        loginHandle(true);
        window.location.href = "/dashboard";
      } else {
        window.alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //HANDLE LOGIN

  const loginHandle = (log) => {
    sessionStorage.setItem("login", log);
  };
  const navigate = useNavigate();
  useEffect(() => {
    let login = sessionStorage.getItem("login");
    if (login) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="login-container">
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} method="POST">
          <div className="txt_field">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>Password</label>
          </div>

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

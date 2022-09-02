import { NavLink, Link, Outlet } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <div className="dsb-container">
        <nav className="dsb-nav">
          <ul>
            {
              <li>
                <NavLink to="/dashboard" className="logo a">
                  <span className="nav-item">PEN-Nepal</span>
                </NavLink>
              </li>
            }
            <li>
              <Link to="applicant">
                <FaUserAlt className="dsb-icons" />
                <span className="nav-item">Applicants</span>
              </Link>
            </li>
            <li>
              <Link to="subscriber">
                <AiFillMessage className="dsb-icons" />
                <span className="nav-item">Subscribers</span>
              </Link>
            </li>
          </ul>
        </nav>

        <section className="main">
          <div className="main-top">
            <h1>Dashboard</h1>
          </div>

          <Outlet />
        </section>
      </div>
    </div>
  );
}

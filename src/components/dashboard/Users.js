import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Users = () => {
  const [data, setData] = useState([]);

  const getUserData = () => {
    axios
      .get(`/register-api-lists`)
      .then((res) => console.log(setData(res.data.reverse())))
      .catch((err) => console.log("something isnt right"));
  };

  const dltUser = async (id) => {
    const res = await axios
      .delete(`/register/delete/${id}`)
      .then(() => {
        window.alert("Deleted");
      })
      .catch((err) => {
        window.alert("Error");
        console.log("something isn't right");
      });
  };

  useEffect(() => {
    getUserData();
  }, [dltUser]);

  return (
    <div>
      <section className="attendance">
        <div className="attendance-list">
          <h1>Applicants</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Contact no.</th>
                <th>Qualification</th>
                <th>cv</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {d.fname} {d.lname}
                    </td>
                    <td className="smalltext">
                      <a href={`mailto:${d.aemail}`}>{d.aemail}</a>
                    </td>
                    <td>{d.dob}</td>
                    <td>{d.anumber}</td>
                    <td>{d.qualification}</td>
                    <td>
                      <a href={`http://localhost:5000/uploads/${d.filename}`}>
                        {d.filename}
                      </a>
                    </td>
                    <td
                      style={{ color: "#ff4500", cursor: "pointer" }}
                      onClick={() => {
                        window.alert("Deleting... Please wait 1sec");
                        dltUser(d.id);
                      }}
                    >
                      <RiDeleteBin5Line />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Users;

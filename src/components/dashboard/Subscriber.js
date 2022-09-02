import { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";

const Users = () => {
  const [subscribers, setSubscribers] = useState([
    {
      name: "",
      email: "",
      number: "",
    },
  ]);

  const dltUser = async (id) => {
    const res = await axios
      .delete(`/subscribe/sub/${id}`)
      .then(() => {
        window.alert("Deleted");
      })
      .catch((err) => {
        window.alert("Error");
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`/subscribe/api/lists`)
      .then((response) => response.json())
      .then((res) => setSubscribers(res.reverse()))
      .catch((err) => console.log(err));
  }, [dltUser]);

  return (
    <div>
      <section className="attendance">
        <div className="attendance-list">
          <h1>Subscribers</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact no.</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{subscriber.name}</td>
                    <td className="smalltext">
                      <a
                        style={{ display: "inline-block", marginLeft: "30px" }}
                        href={`mailto:${subscriber.email}`}
                      >
                        {subscriber.email}
                      </a>
                    </td>

                    <td>{subscriber.number}</td>
                    <td
                      style={{ color: "#ff4500", cursor: "pointer" }}
                      onClick={() => dltUser(subscriber.id)}
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

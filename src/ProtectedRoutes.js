import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes(props) {
  const { Component } = props;

  const navigate = useNavigate();
  useEffect(() => {
    let login = sessionStorage.getItem("login");
    if (!login) {
      navigate("/admin");
    }
  });
  return (
    <div>
      {" "}
      <Component />{" "}
    </div>
  );
}

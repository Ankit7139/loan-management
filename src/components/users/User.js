import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    occupation: "",
    income: "",
    loantype: "",
    loanamount: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/home">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">firstname: {user.firstname}</li>
        <li className="list-group-item">lastname: {user.lastname}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">occupation: {user.occupation}</li>
        <li className="list-group-item">income: {user.income}</li>
        <li className="list-group-item">loantype: {user.loantype}</li>
        <li className="list-group-item">loanamount: {user.loanamount}</li>
      </ul>
    </div>
  );
};

export default User;

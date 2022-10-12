import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
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

  const {
    firstname,
    lastname,
    email,
    phone,
    occupation,
    income,
    loantype,
    loanamount,
  } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/home");
    window.location.reload();
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your First Name"
              name="firstname"
              value={firstname}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last Name"
              name="lastname"
              value={lastname}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Occupation"
              name="occupation"
              value={occupation}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Income"
              name="income"
              value={income}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Loan Type"
              name="loantype"
              value={loantype}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Loan Amount"
              name="loanamount"
              value={loanamount}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
      {/* <div class="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div> */}
    </div>
  );
};

export default AddUser;

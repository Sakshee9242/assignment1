import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmp() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [salary, setSalary] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter a name.");
      return;
    }

    if (!Email.trim()) {
      alert("Please enter an email.");
      return;
    }

    if (!validateEmail(Email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!salary.trim()) {
      alert("Please enter a salary.");
      return;
    }

    const data = { name, Email, salary };

    fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      // return res.json()
      if (res) {
        alert("employee created");
        navigate("/");
      }
    });
    // .then((data)=>{
    //   setName(data.name)
    //   setEmail(data.email)
    //   setSalary(data.salary)
    // })
  };

  const validateEmail = (Email) => {
    // Simple email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(Email);
  };

  return (
    <div>
      <div className="container w-50 text-start">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="form-control"
                  placeholder="name"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" name="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="email"
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Salary</label>
                <input
                  type="text"
                  value={salary}
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                  className="form-control"
                  placeholder="salary"
                ></input>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmp;

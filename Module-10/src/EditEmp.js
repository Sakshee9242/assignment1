import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmp() {
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [salary, setSalary] = useState("");

  const { eid } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/employees/${eid}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
        setSalary(data.salary);
      });
  }, [eid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { Id, name, salary, Email };
    fetch(`http://localhost:3000/employees/${eid}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res) {
        alert("Updated");
        navigate("/");
      }
    });
  };

  return (
    <div>
      <div className="container w-50 text-start">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={Id}
                readOnly
                className="form-control"
              ></input>
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
                save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEmp;

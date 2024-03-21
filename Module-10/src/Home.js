import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const [details, setDetails] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data);
      });
  });

  const handleView = (id) => {
    navigate(`/viewemp/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/editemp/${id}`);
  };

  const handleDelete = (id) => {
    fetch("http://localhost:3000/employees/" + id, {
      method: "delete",
    }).then((res) => {
      if (res) {
        alert("deleted");
        window.location.reload();
      }
    });
  };

  return (
    <div className="container text-center">
      <h2>CRUD TABLE</h2>
      <Link to="/addemp" className="btn btn-primary px-2 py-2 my-2">
        Add Employee
      </Link>
      <div className="container text-center">
        <div className="row">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Salary</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
                        {details && details.map((employee) => (
                  <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.salary}</td>
                    <td>
                      <button
                        className="btn btn-info mx-2"
                        onClick={() => {
                          handleView(`${employee.id}`);
                        }}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-success mx-2"
                        onClick={() => {
                          handleEdit(`${employee.id}`);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => {
                          handleDelete(`${employee.id}`);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;

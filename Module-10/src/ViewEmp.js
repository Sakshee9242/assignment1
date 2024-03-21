import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewEmp() {
  const [Id, setId] = useState("");
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [salary, setSalary] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/employees/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
        setSalary(data.salary);
      });
  }, []);
  return (
    <div>
      <h4>ID : {Id}</h4>
      <p> Name : {name}</p>
      <p> Email {Email}</p>
      <p> Salary {salary}</p>
    </div>
  );
}

export default ViewEmp;

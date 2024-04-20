import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adduser } from "./UseReducer";

function AddUser() {



  const user = useSelector(state=>state.user)

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name.trim()){
      alert("Please Type Name")
      return
    }
    if(!course.trim()){
      alert("Please Type Course Name")
      return;
    }
    if(!email.trim()){
      alert("Please Type Your Email Address")
      return;
    }

    navigate("/");
    dispatch(adduser({id: user.length+1, name: name, course: course , Email:email}))
  };
  return (
    <div>
      <div className="container">
        <h2>Add New User</h2>
        <div className="row justify-content-center mt-5">
          <div className="col col-lg-5 text-start">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control"  value={name} onChange={(e)=>{setName(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Course
                </label>
                <input type="text" className="form-control"  value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp" value={email} onChange={(e)=>{setEmail(e.target.value)}}
                />
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

export default AddUser;

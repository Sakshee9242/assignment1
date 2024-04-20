import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { edituser } from './UseReducer';

function EditUser() {
  const {id} = useParams()
  const user = useSelector(state => state.user)

  const existingUser = user.filter((users)=>{
   return users.id == id
  })

  const {name,course,Email} = existingUser[0]


  const [id1,setuId1] = useState(id)
  const [uname,setuName] = useState(name)
  const [ucourse, setuCourse] = useState(course)
  const [uemail, setuEmail] = useState(Email)
  const nav = useNavigate()
 
  const dispath = useDispatch()
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispath(edituser({id: id1, name:uname, course: ucourse, Email:uemail}))
    nav('/')

  }
 

 
  return (
    <div>
            <div className="container w-50 text-start">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={id1}
                onChange={(e) => {
                  setuId1(e.target.value);
                }}
                disabled
                className="form-control"
              ></input>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  value={uname}
                  onChange={(e) => {
                    setuName(e.target.value);
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
                  value={uemail}
                  onChange={(e)=>setuEmail(e.target.value)}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="email"
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Course</label>
                <input
                  type="text"
                  value={ucourse}
                  onChange={(e) => {
                    setuCourse(e.target.value);
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
  )
}

export default EditUser

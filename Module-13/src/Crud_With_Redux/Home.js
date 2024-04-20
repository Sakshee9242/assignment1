import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteuser } from './UseReducer'

function Home() {
  const user = useSelector(state=>state.user)
  const nav = useNavigate()
  const dispatch = useDispatch()

  
  const handleView = (id)=>{
   nav("/viewuser/" + id)
   
  }
  const handleEdit = (id)=>{
    console.log(id);
   nav ("/edituser/" + id)
  }
  const handleDelete = (id)=>{
    dispatch(deleteuser({id}))  
  } 
  return (
    <div>
      <div className='container'>
        <h2>User Data</h2>
        <Link to='/adduser' className='btn btn-primary my-2'>Add User</Link>
        <div className='row'>
          <div className='col'>
          <table className="table">
  <thead className='table-warning'>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Course</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {user.map((userData)=>(
    <tr key={userData.id}>
      <td>{userData.id}</td>
      <td>{userData.name}</td>
      <td>{userData.course}</td>
      <td>{userData.Email}</td>
      <td>
      <button onClick={()=>handleView(userData.id)} className='btn btn-primary mx-2'> View </button>
      <button    onClick={()=>handleEdit(userData.id)} className='btn btn-success mx-2'> Edit </button>
      <button      onClick={()=>handleDelete(userData.id)} className='btn btn-danger mx-2'> Delete </button>
      </td>
    </tr>
    ))}
  </tbody>
</table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

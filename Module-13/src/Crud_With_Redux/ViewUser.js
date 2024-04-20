import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ViewUser() {
  const {id} = useParams()
  const user = useSelector(state => state.user)
  const existingUser = user.filter((user)=>{
    return user.id == id
})
const {name,Email,course} = existingUser[0]




  return (
    <div>
      <h2>User Details</h2>
        <div>
          <p>ID: {id}</p>
          <p>Name: {name}</p>
          <p>Course: {course}</p>
          <p>Email: {Email}</p>
        </div>
    </div>
  );
}

export default ViewUser;

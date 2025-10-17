import { useDispatch, useSelector } from "react-redux"
import {deleteUser}  from "../../features/users/userSlice";
import type { AppDispatch, RootState } from "../../app/store";

const Users = () => {

  const users = useSelector((state: RootState) => state.user.users);
  const dispatch=useDispatch<AppDispatch>();

  return (
   <>
    <div>users</div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>lastName</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        users.map((user:any)=>(
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={()=>dispatch(deleteUser(user.id))}>delete</button>
            </td>
          </tr>
        ))
       }
      </tbody>
    </table>
   </>
    
  )
}

export default Users
import { createSlice } from "@reduxjs/toolkit";
import { users } from "./UserData";

export const userReducer = createSlice({
    name : "user",
    initialState : users,
    reducers : {
        adduser : (state,action)=> {
            state.push(action.payload)
        },
        edituser : (state,action) =>{
            const {id,name,course,Email} = action.payload
            const user1 = state.find((user)=>{
               return user.id == id
            })
            if(user1){
                user1.name=name;
                user1.Email=Email;
                user1.course=course;
            }
        },
        deleteuser : (state,action) =>{
            state.splice(action.payload, 1)
        }
    }
})
export const {adduser, edituser, deleteuser} = userReducer.actions
export default userReducer.reducer
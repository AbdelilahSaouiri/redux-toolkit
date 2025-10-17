import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

type UserState={
    users: User[];
    loading:boolean;
};

const initialState:UserState={
    users:[
        {id:1,firstName:"abdelilah",lastName:"saouiri",email:"abdelilah@gmail.com"},
        {id:2,firstName:"sal",lastName:"fes",email:"salfes@gmail.com"},
        {id:3,firstName:"zina",lastName:"casa",email:"zina@gmail.com"}
    ],
    loading:true
}

const userSlice:any=createSlice({
       name:"user",
       initialState,
       reducers:{
           deleteUser:(state,{payload})=>{
            return {
                ...state,
                users:state.users.filter((user:User)=>user.id!=payload)
            }
           }
       }
})

export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
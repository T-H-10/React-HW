import { FormEvent, useContext, useReducer, useRef } from "react"
import userReducer, { UserContext, UserType } from "./userReducer"
import { Button } from "@mui/material"
import UserDetails from "./UserDetails"
import Form from "./Form"

const Login=({setIsLogin}:{setIsLogin:Function})=>{
      const { user, userDispatch } = useContext(UserContext)
    const handleSubmit=(e: FormEvent, userToLogin:UserType)=>{
            e.preventDefault();
            userDispatch({
                type: 'CREATE_USER',
                data: userToLogin
            })
            setIsLogin(true);
        }
   
    return(
        <>
        <Form handleSubmit={handleSubmit}></Form>
        </>
    )
}
export default Login


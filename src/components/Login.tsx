import { FormEvent, useContext, useRef } from "react"
import { UserContext } from "./userReducer"
import axios from "axios";
import { Box, TextField, Button } from "@mui/material";

const Login = ({ setIsLogin, routerURL }: { setIsLogin: Function, routerURL: string }) => {
    const { user, userDispatch } = useContext(UserContext);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit =  async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res= await axios.post(`${routerURL}/login`, {
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            });
            userDispatch({
                type: 'LOGIN_USER',
                data: {
                    id: res.data.id,
                    email: emailRef.current!.value,
                    password: passwordRef.current!.value
                }
            })
            setIsLogin(true);
        } catch (e) {
            console.log(e);
            if (e.response && e.response.status === 401)
                alert('invalid credentials');
        }
        emailRef.current!.value = ''
        passwordRef.current!.value = ''
    }

    return (
        <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
            position: 'absolute', // Set position to absolute
            top: '20%', // Adjust this value to position vertically
            left: '50%', // Center horizontally
            transform: 'translateX(-50%)', // Adjust for the size of the box
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 300,
            padding: 2,
            gap: 2,
            backgroundColor: 'white', // Optional: background color for better visibility
            boxShadow: 3, // Optional: adds shadow for depth
            borderRadius: 2 // Optional: rounded corners
        }}
    >
        <TextField
            inputRef={emailRef}
            label="Email"
            type="email"
            variant="outlined"
            required
        />
        <TextField
            inputRef={passwordRef}
            label="Password"
            type="password"
            variant="outlined"
            required
        />
        <Button type="submit" variant="contained" color="primary">
            Login
        </Button>
    </Box>
    )
}
export default Login


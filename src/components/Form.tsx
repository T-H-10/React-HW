import { useContext, useRef, useState } from "react";
//import { UserContext, UserType } from "./userReducer";
import TextField from "@mui/material/TextField/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { UserContext } from "./userReducer";
const Form = ({ handleSubmit }: { handleSubmit: Function }) => {
    const { user, userDispatch } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        address: user.address,
        tel: user.tel
    });
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value, // עדכון הערך של השדה המתאים
        });
    };
   
    return (<>
        <Box 
            component="form"
            sx={{
                position: 'fixed',
                top: '5vh',
                left: '30vw',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100vh', // גובה מלא של חלון 
                '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => { handleSubmit(e, formData); }}
        >
            <TextField id="filled-basic1" label="first name" variant="filled"
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
            />
            <TextField id="filled-basic2" label="last name" variant="filled"
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
            />
            <TextField id="filled-basic3" label="email" variant="filled"
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <TextField id="filled-basic4" label="password" variant="filled"
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
            <TextField id="filled-basic5" label="address" variant="filled"
                type='text'
                name='address'
                value={formData.address}
                onChange={handleChange}
            />
            <TextField id="filled-basic6" label="tel" variant="filled"
                type='text'
                name='tel'
                value={formData.tel}
                onChange={handleChange}
            />
            <Button sx={{color: 'black'}} variant="outlined"
                type="submit"
                startIcon={<DoneOutlineIcon />}
                color="inherit">Save
            </Button>
            {/* <Button type="submit">edit</Button> */}
        </Box>
    </>)
}

export default Form;
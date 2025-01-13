import { useContext, useState } from "react";
import TextField from "@mui/material/TextField/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { UserContext } from "./userReducer";
const Form = ({ handleSubmit }: { handleSubmit: Function }) => {
    const { user, userDispatch } = useContext(UserContext);
    const [formData, setFormData] = useState({
        id: user.id,
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
                height: '80vh', // Full height of the window
                width: '30vw', // Width of the form
                backgroundColor: 'white', // Solid background color
                zIndex: 1000, // Ensure it overlays other content
                pointerEvents: 'auto', // Allows interaction with the form
                '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => { handleSubmit(e, formData); }}
        >
            <TextField 
                id="filled-basic1" 
                label="First Name" 
                variant="filled"
                type='text'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
            />
            <TextField 
                id="filled-basic2" 
                label="Last Name" 
                variant="filled"
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
            />
            <TextField 
                id="filled-basic3" 
                label="Email" 
                variant="filled"
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <TextField 
                id="filled-basic4" 
                label="Password" 
                variant="filled"
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
            />
            <TextField 
                id="filled-basic5" 
                label="Address" 
                variant="filled"
                type='text'
                name='address'
                value={formData.address}
                onChange={handleChange}
            />
            <TextField 
                id="filled-basic6" 
                label="Tel" 
                variant="filled"
                type='text'
                name='tel'
                value={formData.tel}
                onChange={handleChange}
            />
            <Button 
                sx={{ color: 'black' }} 
                variant="outlined"
                type="submit"
                startIcon={<DoneOutlineIcon />}
                color="inherit"
            >
                Save
            </Button>
            {/* <Button type="submit">Edit</Button> */}
        </Box>
    </>)
}

export default Form;
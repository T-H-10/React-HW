import React from 'react';
import { Link } from "react-router-dom"; // Make sure to use react-router-dom
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Application
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;


// import { Link } from "react-router";

// const NavBar=()=>{
//     return(
//         <>
//         <nav>
//             <Link to='/'>Home</Link>
//             |
//             <Link to='/about'>About</Link>  
//         </nav>
//         </>
//     )
// }
// export default NavBar;
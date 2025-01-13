import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full viewport height
                backgroundColor: '#f5f5f5' // Light background color
            }}
        >
            <Typography variant="h4" component="h1">
                About
            </Typography>
        </Box>
    );
};

export default About;


// const About=()=>{
//     return(
//         <>
//             About
//         </>
//     )
// }
// export default About
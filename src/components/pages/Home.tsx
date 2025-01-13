import React from 'react';
import { Box, Typography } from '@mui/material';

const CenteredContent = () => {
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
            <Box 
                sx={{
                    textAlign: 'center',
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 3,
                    backgroundColor: '#fff', // White background for content
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to the Application
                </Typography>
                <Typography variant="body1">
                    Home Page
                </Typography>
            </Box>
        </Box>
    );
};

export default CenteredContent;


// const Home=()=>{
//     return(
//         <>
//         Home
//         </>
//     )
// }
// export default Home
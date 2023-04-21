import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './index.css'
const Loading = () => {
    return (
        <Box className='loading'>
            <CircularProgress className='loading-circle' size={70} />
        </Box>
    );
}

export default Loading
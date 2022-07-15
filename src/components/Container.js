import React from 'react';
import { Box } from '@mui/material';

const Container = ({ children }) => (
    <Box
        component={'section'}
        sx={{
            width: 'calc(100% - 235px)',
            height: 'calc(100% - 64px)',
            ml: '235px',
            position: 'absolute',
            top: '64px',
            p: '65px',
            backgroundColor: '#f1f9fe',
        }}
    >
        {children}
    </Box>
);

export default Container;

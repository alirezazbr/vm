import React from 'react';
import { Box } from '@mui/material';

import { Header, SideMenu } from '../../components';

const Main = ({ children }) => {
    return (
        <Box component={'div'}>
            <Header />
            <SideMenu />
            {children}
        </Box>
    );
};

export default Main;

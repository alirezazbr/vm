import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Header = () => {
    return (
        <Box component={'section'}>
            <Grid item xs={12} display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <Grid item xs={3}></Grid>
                <Grid item xs={9}></Grid>
            </Grid>
        </Box>
    );
};

export default Header;

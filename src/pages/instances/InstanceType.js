import React from 'react';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import {
	Box, Grid, Button, Typography, 
} from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

import { RoadMap } from './components';
import { Container } from '../../components';

const InstanceLocation = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <RoadMap />
            <Typography variant={'h5'} sx={{ fontWeight: '600', color: '#0d2d51', mt: '70px', ml: '10px' }}>Instance Type</Typography>

            <Box component={'div'}>
                <CountriesWrapper container display={'flex'}>
                    
                </CountriesWrapper>
            </Box>

            <Grid item xs={12} display={'flex'} justifyContent={'space-between'} flexDirection={'row'} sx={{ position: 'absolute', width: 'calc(100% - 130px)', bottom: '60px' }}>
                <NavigateBtn variant="contained" endIcon={<ChevronRight />} onClick={() => navigate(-1)}>
                    prev Step
                </NavigateBtn>
                
                <NavigateBtn variant="contained" endIcon={<ChevronRight />}>
                    Next Step
                </NavigateBtn>
            </Grid>
        </Container>
    );
};

export default InstanceLocation;

const CountriesWrapper = styled(Grid)(({ theme }) => ({
    flexWrap: 'wrap',
    height: '310px',
    overflowX: 'auto',
    '&::-webkit-scrollbar': {
        width: '0.4em',
        backgroundColor: '#e9f1f6',
        borderRadius: '7px',

    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#dfe7ec',
        borderRadius: '7px',
    }
  }));

  const NavigateBtn = styled(Button)(({ theme }) => ({
    width: '125px',
    height: '41px',
    mt: '5px',
    color: '#0d2d51',
    fontSize: '13px',
    fontWeight: '600',
    backgroundColor: '#fac802',
    boxShadow: 'none',
    textTransform: 'capitalize',
  }));

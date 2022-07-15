import React, { useState } from 'react';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag";
import {
	Box, Grid, Button, Typography, 
} from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

import { RoadMap } from './components';
import { Container } from '../../components';

const InstanceLocation = () => {
    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState(0);

    const countries = [
        {
            iso: 'SG',
            countryName: 'Singapore',
        },
        {
            iso: 'Us',
            countryName: 'Los Angeles',
        },
        {
            iso: 'US',
            countryName: 'Dallas',
        },
        {
            iso: 'FR',
            countryName: 'Paris',
        },
        {
            iso: 'DE',
            countryName: 'Germany',
        },
        {
            iso: 'US',
            countryName: 'New York',
        },
        {
            iso: 'US',
            countryName: 'Buffalo',
        },
        {
            iso: 'FR',
            countryName: 'Roubaix',
        },
        {
            iso: 'SG',
            countryName: 'Singapore',
        },
        {
            iso: 'Us',
            countryName: 'Los Angeles',
        },
        {
            iso: 'US',
            countryName: 'Dallas',
        },
        {
            iso: 'FR',
            countryName: 'Paris',
        },
        {
            iso: 'DE',
            countryName: 'Germany',
        },
        {
            iso: 'US',
            countryName: 'New York',
        },
        {
            iso: 'US',
            countryName: 'Buffalo',
        },
        {
            iso: 'FR',
            countryName: 'Roubaix',
        },
    ];

    return (
        <Container>
            <RoadMap />
            <Typography variant={'h5'} sx={{ fontWeight: '600', color: '#0d2d51', mt: '70px', ml: '10px' }}>Instance Location</Typography>

            <Box component={'div'}>
                <CountriesWrapper container display={'flex'}>
                    {
                        countries.map(({ iso, countryName }, index) => (
                            <Grid key={`${countryName}-${index}`} item xs={3} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} sx={{
                                height: '155px',
                                p: '10px',
                                borderRadius: '7px',
                            }}>
                                <Grid item xs={12} display={'flex'} alignItems={'center'} flexDirection={'column'}
                                    onClick={() => setSelectedCountry(index)}
                                    sx={{
                                        width: '100%',
                                        borderRadius: '7px',
                                        backgroundColor: '#ffffff',
                                        border: (index === selectedCountry) ? '3px solid #2c5eff' : 'none',
                                        boxShadow: (index === selectedCountry) ? '0px 0px 0px 3px #e3eefe' : 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Grid item xs={12} display={'flex'} alignItems={'center'} >
                                        <ReactCountryFlag
                                            countryCode={iso}
                                            svg
                                            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                                            cdnSuffix="svg"
                                            style={{
                                                width: "3.2em",
                                                height: "3.2em",
                                                margin: '20px 0 0',
                                                borderRadius: "50%",
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} display={'flex'} alignItems={'center'}>{countryName}</Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </CountriesWrapper>
            </Box>

            <Grid item xs={12} display={'flex'} justifyContent={'space-between'} flexDirection={'row'} sx={{ position: 'absolute', width: 'calc(100% - 130px)', bottom: '60px' }}>
                <NavigateBtn variant="contained" endIcon={<ChevronRight />} onClick={() => navigate(-1)} sx={{ visibility: 'hidden' }}>
                    prev Step
                </NavigateBtn>
                
                <NavigateBtn variant="contained" endIcon={<ChevronRight />} onClick={() => navigate('/main/instances/type')}>
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
    fontSize: '11px',
    fontWeight: '600',
    backgroundColor: '#fac802',
    boxShadow: 'none',
    textTransform: 'capitalize',
  }));

import React from 'react';
import { styled } from '@mui/system';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Button,
} from '@mui/material';
import { Home, Add, ContentCopy, Key, HomeMax, Wifi, TextSnippet, AttachMoney, HelpOutline, SportsSoccer } from '@mui/icons-material';

const SideMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location || { pathname: '' };

    return (
        <Box component={'section'} sx={{ position: 'fixed', width: '235px', height: '100%', mt: '64px' }}>
            <Grid container display={'flex'} sx={{
                width: '100%',
                height: '100%',
				borderRight: 1,
				borderColor: '#ccc',
                p: '30px',
                boxSizing: 'border-box',
			}}>
                <Box sx={{ width: '100%', maxWidth: 360, height: 'calc(100% - 64px)', display: 'flex', flexDirection: 'column' }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <Home sx={{ color: '#0d2d51' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" sx={{ color: '#0d2d51' }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => navigate('/main/instances/location')} sx={{ backgroundColor: (pathname.includes('instances')) ? '#2c5eff' : 'transparent', borderRadius: '7px' }}>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <Add sx={{ color: (pathname.includes('instances')) ? '#ffffff' : '#0d2d51' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Instances" sx={{ color: (pathname.includes('instances')) ? '#ffffff' : '#0d2d51' }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <ContentCopy sx={{ color: '#0d2d51' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Snapshots" sx={{ color: '#0d2d51' }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <Key sx={{ color: '#0d2d51' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="SSH Keys" sx={{ color: '#0d2d51' }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ pointerEvents: 'none', opacity: '0.5' }}>
                                <ListItemButton>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <HomeMax sx={{ color: '#0d2d51' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Volume" sx={{ color: '#0d2d51' }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                    <Divider />
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <Wifi sx={{ color: '#0d2d51' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Networking" sx={{ color: '#0d2d51' }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <TextSnippet sx={{ color: '#0d2d51' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Report" sx={{ color: '#0d2d51' }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>

                    <nav aria-label="secondary mailbox folders" style={{ marginTop: 'auto' }}>
                        <MoreOption variant="outlined" color={'inherit'} startIcon={<AttachMoney />}>
                            Billing
                        </MoreOption>
                        <MoreOption variant="outlined" color={'inherit'} startIcon={<HelpOutline />}>
                            Support
                        </MoreOption>
                        <MoreOption variant="outlined" color={'inherit'} startIcon={<SportsSoccer />}>
                            Help
                        </MoreOption>
                    </nav>
                </Box>
            </Grid>
        </Box>
    );
};

export default SideMenu;

const MoreOption = styled(Button)(({ theme }) => ({
    width: '100%', 
    marginTop: '5px', 
    justifyContent: 'flex-start',
  }));

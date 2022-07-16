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
                                <Li>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <Home className={'inner-li'} />
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" className={'inner-li'} />
                                </Li>
                            </ListItem>
                            <ListItem disablePadding>
                                <Li onClick={() => navigate('/main/instances/location')} sx={{ backgroundColor: (pathname.includes('instances')) ? '#2c5eff' : 'transparent' }}>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <Add className={(pathname.includes('instances')) ? 'selected-inner-li' : 'inner-li' } />
                                    </ListItemIcon>
                                    <ListItemText primary="Instances" className={(pathname.includes('instances')) ? 'selected-inner-li' : 'inner-li' } />
                                </Li>
                            </ListItem>
                            <ListItem disablePadding>
                                <Li>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <ContentCopy className={'inner-li'} />
                                    </ListItemIcon>
                                    <ListItemText primary="Snapshots" className={'inner-li'} />
                                </Li>
                            </ListItem>
                            <ListItem disablePadding>
                                <Li>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <Key className={'inner-li'} />
                                    </ListItemIcon>
                                    <ListItemText primary="SSH Keys" className={'inner-li'} />
                                </Li>
                            </ListItem>
                            <ListItem disablePadding sx={{ pointerEvents: 'none', opacity: '0.5' }}>
                                <Li>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <HomeMax className={'inner-li'} />
                                    </ListItemIcon>
                                    <ListItemText primary="Volume" className={'inner-li'} />
                                </Li>
                            </ListItem>
                        </List>
                    </nav>
                    <Divider />
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <Li>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <Wifi className={'inner-li'} />
                                    </ListItemIcon>
                                    <ListItemText primary="Networking" className={'inner-li'} />
                                </Li>
                            </ListItem>
                            <ListItem disablePadding>
                                <Li>
                                    <ListItemIcon sx={{ minWidth: 'unset', mr: '12px' }}>
                                        <TextSnippet className={'inner-li'} />
                                    </ListItemIcon>
                                    <ListItemText primary="Report" className={'inner-li'} />
                                </Li>
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
    color: '#0d2d51',
    '&:hover': {
        backgroundColor: '#2c5eff',
        color: '#ffffff',
    }
  }));

const Li = styled(ListItemButton)(({ theme }) => ({
    borderRadius: '7px',
    marginTop: '3px',
    '& .inner-li': {
        color: '#0d2d51',
    },
    '& .selected-inner-li': {
        color: '#ffffff',
    },
    '&:hover': {
        backgroundColor: '#2c5eff',
        '& .inner-li': {
            color: '#ffffff',
        },
    }
}));

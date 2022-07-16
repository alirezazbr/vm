import React, { useState } from 'react';
import { styled, alpha } from '@mui/system';
import { translate } from '../i18n';
import {
	Box, Grid, Button, Menu, MenuItem, Avatar, Badge, Link, 
} from '@mui/material';
import { KeyboardArrowDown, Edit, NotificationsNone } from '@mui/icons-material';

import routerHosting from '../assets/images/router_hosting.png';

function Header() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box component={'section'} sx={{ position: 'fixed', width: '100%' }}>
			<Grid container spacing={2} display={'flex'} flexDirection={'row'} sx={{
				height: '80px',
				border: 1,
				borderColor: '#ccc',
			}}>
				<Grid item display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{
					width: '250px',
					height: '100%',
					borderRight: 1,
					borderColor: '#ccc',
				}}>
					<Link href={'https://abrnoc.com/'}>
						<img 
							src={routerHosting}
							alt={'abrNOC logo'}
							style={{ width: '140px' }}
						/>
					</Link>
				</Grid>

				<Grid item display={'flex'} sx={{ width: 'calc(100% - 250px)' }}>
					<Grid container justifyContent={'flex-end'} alignItems={'center'} sx={{ mr: '15px' }}>
						<Badge color={'error'} variant={'dot'} overlap={'circular'} badgeContent={' '}>
							<NotificationsNone />
						</Badge>

						<div style={{ width: '1px', height: '40%', backgroundColor: '#ccc', margin: '0 20px' }} />

						<Avatar
							alt={'user'}
							variant={'rounded'}
							src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomvUFpRZOwsvx_of1cMru_lfeuucB0imtyQ&usqp=CAU'}
							sx={{ width: 45, height: 45, mr: '15px' }}
						/>

						<Button
							id={'demo-customized-button'}
							aria-controls={open ? 'demo-customized-menu' : undefined}
							aria-haspopup={'true'}
							aria-expanded={open ? 'true' : undefined}
							variant="text"
							disableElevation
							color="inherit"
							onClick={handleClick}
							endIcon={<KeyboardArrowDown />}
							sx={{ color: '#0d2d51' }}
						>
							{translate('user')}{'\r'}
						</Button>


						<StyledMenu
							id="demo-customized-menu"
							MenuListProps={{
								'aria-labelledby': 'demo-customized-button',
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose} disableRipple>
								<Edit />
								{'Edit\r'}
							</MenuItem>
						</StyledMenu>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		{...props}
	/>
))(() => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: '25px',
		minWidth: 180,
		color: 'black',
		boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: '#0d2d51',
				marginRight: '10px',
			},
			'&:active': {
				backgroundColor: alpha(
					'#0d2d51',
					'#0d2d51',
				),
			},
		},
	},
}));

export default Header;

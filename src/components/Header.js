import React, { useState } from 'react';
import { styled, alpha } from '@mui/system';
import {
	Box, Grid, Button, Menu, MenuItem, Avatar, Badge, Link, 
} from '@mui/material';
import { KeyboardArrowDown, Edit, NotificationsNone } from '@mui/icons-material';

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
							src={'data:image/png;base64,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'}
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
							src={''}
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
							{'User\r'}
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

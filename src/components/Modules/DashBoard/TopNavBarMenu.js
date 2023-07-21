import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
//icons
import IconButton from '@mui/material/IconButton';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';

const AppBar = styled(MuiAppBar, {})();

const actions = [
    {
        title: 'Export Report',
        logo: SystemUpdateAltIcon,
    },
    {
        title: 'Saved Filters',
        logo: TuneIcon,
    },
    {
        title: 'Now',
        logo: CalendarTodayIcon,
    }
]


export default function TopNavBarMenu() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <>
            <IconButton

            // sx={{ paddingLeft: '0px' }}
            >
                <MenuIcon size="large"
                    onClick={handleOpenNavMenu}
                    />
            </IconButton>
            <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    position: "absolute",
                }}
            >
                {actions.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}



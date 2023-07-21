import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
// import Menu from '@mui/material/Menu';

import "./TopNavBar.css";
//icons
import IconButton from '@mui/material/IconButton';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';


import TopNavBarMenu from './Modules/DashBoard/TopNavBarMenu';

const drawerWidth = 125;

const AppBar = styled(MuiAppBar, {})();

// const actions = [
//     {
//         title: 'Export Report',
//         logo: SystemUpdateAltIcon,
//     },
//     {
//         title: 'Saved Filters',
//         logo: TuneIcon,
//     },
//     {
//         title: 'Now',
//         logo: CalendarTodayIcon,
//     }
// ]


export default function TopNavBar() {

    // const [anchorElNav, setAnchorElNav] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };


    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    return (
        <AppBar id='TopBar' position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, display:"flex", justifyContent:"flex-end", padding: '0 !important' }} >
            <Toolbar>
                <div>
                    <Typography variant="h6" noWrap component="div"  >
                        Dashboard
                    </Typography>
                </div>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    < TopNavBarMenu />
                    {/* <IconButton
                        size="large"
                        onClick={handleOpenNavMenu}
                        // sx={{ paddingLeft: '0px' }}
                    >
                        <MenuIcon />
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
                        }}
                    >
                        {actions.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page.title}</Typography>
                            </MenuItem>
                        ))}
                    </Menu> */}
                </Box>
                <div>
                    <Box id='TopBarGroupButtons' variant="text"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <Button key='Export Report'
                            endIcon={<SystemUpdateAltIcon
                                sx={{ height: 16, width: 16 }} />}
                            sx={{
                                paddingX: '18px',
                                borderRadius: 0,
                                borderRight: 'solid 1px',
                                borderColor: 'divider',
                            }}>Export Report
                        </Button>
                        <Button key='Saved Filters'
                            endIcon={<TuneIcon
                                sx={{ height: 16, width: 16 }} />}
                            sx={{
                                paddingX: '18px',
                                borderRadius: 0,
                                borderRight: 'solid 1px',
                                borderColor: 'divider',
                            }}> Saved Filters
                        </Button>
                        <Button key='Now'
                            endIcon={<CalendarTodayIcon
                                sx={{ height: 16, width: 16 }} />}
                            sx={{
                                paddingX: '18px',
                                borderRadius: 0,
                            }}> Now
                        </Button>
                    </Box>
                </div>
                <div id='TopSearch'>
                    <InputBase id='TopSearchBar'
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton type="button" sx={{ p: '0px' }} aria-label="search">
                        <SearchIcon id='SearchButton'
                            sx={{ height: 32, width: 32 }} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar >
    );
}
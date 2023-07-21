import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

//css
import "./SideNavBar.css";

//icons
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import DashboardIcon from '@mui/icons-material/Dashboard';


const TopNavBarButtons = [
    {
        name: "Settings",
        icon: SettingsIcon
    },
    {
        name: "DashBoard",
        icon: DashboardIcon
    },
    {
        name: "Settings",
        icon: SettingsIcon
    },
    {
        name: "Settings",
        icon: SettingsIcon
    },
    {
        name: "Settings",
        icon: SettingsIcon
    },
]

const BottomNavBarButtons = [
    {
        name: "Help",
        icon: HelpIcon
    },
    {
        name: "Settings",
        icon: SettingsIcon
    },
]

const drawerWidth = '8rem';

const active = {
    color: "white"
}
const nonactive = {
    color: "#717171"
}

export default function PermanentDrawerLeft() {

    const [activeTopTab, setActiveTopTab] = useState()
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
                id='SideNav'
            >
                {/* Upper Buttons */}
                <List id='UpperButtons'>
                    <List id='UpperButtons'>
                        {TopNavBarButtons.map((TopNavBarButtons, index) => (
                            <ListItem disablePadding >

                                <ListItemButton onClick={() => { setActiveTopTab(TopNavBarButtons.name) }}>
                                    <ListItemIcon className="ButtonsLayout">
                                        <TopNavBarButtons.icon sx={activeTopTab === TopNavBarButtons.name ? active : nonactive} />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        ))}

                    </List>

                </List>


                {/* Lower Buttons */}
                <List id='LowerButtons'>
                    {BottomNavBarButtons.map((BottomNavBarButtons, index) => (
                        <ListItem disablePadding >

                            <ListItemButton onClick={() => { setActiveTopTab(BottomNavBarButtons.name) }}>
                                <ListItemIcon className="ButtonsLayout">
                                    <BottomNavBarButtons.icon sx={activeTopTab === BottomNavBarButtons.name ? active : nonactive} />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <ListItem disablePadding >

                        <ListItemButton id="AvatarButton">
                            <ListItemAvatar id="AvatarIcon" >
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                        </ListItemButton>

                    </ListItem>

                </List>

            </Drawer>
        </Box>
    );
}
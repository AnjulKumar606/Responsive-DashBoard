import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
//icons
import DescriptionIcon from '@mui/icons-material/Description';
import BugReportIcon from '@mui/icons-material/BugReport';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import BlockIcon from '@mui/icons-material/Block';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';

//styling
import "./Module4.css";

export const iconstyle = {
    color: "primary.contrastText",
    backgroundColor: "primary.main"
}

export const textstyle = {
    fontWeight: 'Bold',
}

export const ListButtons = [
    {
        title: "Data at risk",
        icon: DescriptionIcon,
    },
    {
        title: "Malware",
        icon: BugReportIcon,
    },
    {
        title: "Lateral movement",
        icon: TrendingUpIcon,
    },
    {
        title: "Unpatched resources",
        icon: CancelPresentationIcon,
    },
    {
        title: "Outdated service",
        icon: BlockIcon,
    },
    {
        title: "Authentication risk",
        icon: CrisisAlertIcon,
    },

];


export default function Module4() {



    const [activeTab, setActiveTab] = useState(0)
    return (

        <Box sx={{ minWidth: '350px' }} >
            <Typography fontSize={21} fontWeight={600} sx={{marginBottom:2}} >
                Major risks
            </Typography>
            <List id="List" >
                <Grid>
                    <Grid xs={12} lg={12}>
                        {ListButtons.map((ListButtons, index) => (
                            <ListItem key={ListButtons.title} disablePadding>
                                <ListItemButton sx={{ minWidth: 45 }} onClick={() => {
                                    setActiveTab(index);
                                }}>
                                    <ListItemIcon className='ButtonIcon' sx={{ minWidth: 45 }}>
                                        < ListButtons.icon sx={activeTab === index ? iconstyle : {}} />
                                    </ListItemIcon>
                                    <ListItemText primary={ListButtons.title} primaryTypographyProps={
                                        activeTab === index ? textstyle : {}
                                    } />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Grid>
                </Grid>
            </List>

        </Box>

    );
}

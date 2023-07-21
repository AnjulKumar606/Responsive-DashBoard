import React from 'react'
import { UserData } from '../../Data/Data1';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BarChart from '../../Charts/BarChart';
import { Button, Divider } from '@mui/material';
//icons
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import AssignmentLateSharpIcon from '@mui/icons-material/AssignmentLateSharp';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import SouthSharpIcon from '@mui/icons-material/SouthSharp';

function Module2() {
    // eslint-disable-next-line
    const [userData, setUserData] = useState({
        labels: ['Assets'],
        datasets: UserData.map((data, index) => ({
            label: [data.id],
            data: [data.amount],
            backgroundColor: [data.colour],
        })),
        options: {

            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                }
            },
            indexAxis: 'y',
            borderWidth: 1,
            borderColor: "black",
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false
                    },
                    ticks: {
                        display: false,
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        display: false,
                    }
                }
            }
        }
    });


    return (

        <Grid sx={{
            paddingRight: '16px'
        }}>
            <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <body>Alerts</body>
                <body>40<SouthSharpIcon sx={{
                    position: 'relative',
                    top: '5px',
                    padding: '3px'
                }} /></body>
            </Grid>
            <Divider />
            <Grid item sx={{
                display: 'grid',
                minHeight: 125,
                minWidth: '410px',

            }}>
                <Grid item sx={{ display: 'flex', maxHeight: 60, minWidth: '410px' }}>
                    <BarChart chartData={userData} chartoption={userData.options} />
                </Grid>
            </Grid>

            {/* buttons */}

            <Grid sx={{
                display: 'flex', justifyContent: 'space-between', width: '100%'
            }} >
                <Grid item xs={6}>
                    <Button disableRipple fullWidth
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            borderRadius: 0,
                            paddingLeft: '12px',


                        }}
                        startIcon={<WarningAmberOutlinedIcon sx={{
                            color: 'yellowgreen',
                            position: 'relative',
                            left: '4px'
                        }} />}
                    >
                        <Typography variant="body1" component="span">
                            <b>6</b>
                            <span style={{ fontSize: 10 }}> Compromise</span>
                        </Typography>
                    </Button>
                </Grid>
                <Grid item sx={{
                    '--Grid-borderWidth': '1px',
                    borderRight: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider',
                }}>

                </Grid>
                <Grid item xs={6}>
                    <Button
                        disableRipple
                        fullWidth
                        sx={{
                            minWidth: 'max-content',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            paddingX: '16px',
                            borderRadius: 0,
                        }}
                        startIcon={
                            <AssignmentLateSharpIcon sx={{
                                color: '#4a72f6',
                                position: 'relative',
                                left: '2px',
                            }} />
                        }
                    >
                        <Typography variant="body1" component="span">
                            <b>22</b>
                            <span style={{ fontSize: 10 }}> Imminent Compromise</span>
                        </Typography>
                    </Button>
                </Grid>
                <Grid item sx={{
                    '--Grid-borderWidth': '1px',
                    borderRight: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider',
                }}>

                </Grid>
                <Grid item xs={6}>
                    <Button
                        disableRipple
                        fullWidth
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            borderRadius: 0,
                            paddingRight: '40px'
                        }}
                        startIcon={
                            <ErrorOutlineOutlinedIcon sx={{
                                color: '#73cbf3',
                                position: 'relative',
                                right: '42px'
                            }} />
                        }
                    >
                        <Typography variant="body1" component="span">
                            <b>12</b>
                            <span style={{ fontSize: 10 }}> hazardous</span>
                        </Typography>
                    </Button>
                </Grid>
            </Grid>

        </Grid >

    )
}

export default Module2

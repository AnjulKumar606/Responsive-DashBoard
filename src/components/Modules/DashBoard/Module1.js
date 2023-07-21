import React from 'react'
import { UserData } from '../../Data/Data1';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BarChart from '../../Charts/BarChart';
import { Button, Divider } from '@mui/material';
//icons
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import NorthSharpIcon from '@mui/icons-material/NorthSharp';


function Module1() {
    // eslint-disable-next-line
    const [userData, setUserData] = useState({
        labels: ['Assets'],
        datasets: UserData.map((data, index) => ({
            label:[data.id],
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
                    // stackWeight: 1,

                    grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false,
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
                <body>Assets</body>

                <body>1842<NorthSharpIcon sx={{
                    position: 'relative',
                    top: '5px',
                    padding: '3px'
                }} /></body>
            </Grid>
            <Divider />

            {/* graph */}
            <Grid item sx={{
                display: 'grid', minHeight: 125, minWidth: '410px',

            }}>
                <Grid item sx={{ maxHeight: 60, minWidth: '410px' }}>
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
                            justifyContent: 'flex-end',
                            borderRadius: 0,
                            paddingLeft: '12px',


                        }}
                        startIcon={<TaskAltIcon sx={{ color: 'yellowgreen' }} />}
                    >
                        <Typography variant="body1" component="span">
                            <b>1801</b>
                            <span style={{ fontSize: 10 }}> Safe</span>
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
                            justifyContent: 'flex-end',
                            borderRadius: 0,
                        }}
                        startIcon={
                            <WarningAmberOutlinedIcon sx={{
                                color: '#62cf94',
                                position: 'relative',
                                right: '22px'
                            }} />
                        }
                    >
                        <Typography variant="body1" component="span">
                            <b>41</b>
                            <span style={{ fontSize: 10 }}> at risk</span>
                        </Typography>
                    </Button>
                </Grid>
            </Grid>

        </Grid >

    )
}

export default Module1

import React from 'react'
import { UserData } from '../../Data/Data1';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Button, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

import BarChart from '../../Charts/BarChart';

//icons 
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import NorthSharpIcon from '@mui/icons-material/NorthSharp';

function Module1() {
    // eslint-disable-next-line
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.id),
        datasets: [
            {
                label:[],
                data: UserData.map((data) => data.amount),
                backgroundColor: ['#3f3d44'],
            }
        ],
        options: {
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: false,
                    // stackWeight: 1,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });


    return (

        <Grid sx={{
            paddingRight: '16px'
        }}>
            {/* heading */}
            <Grid item sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <body>Safe Zone</body>
                <body>8<NorthSharpIcon sx={{
                    position: 'relative',
                    top: '5px',
                    padding: '3px'
                }} /></body>
            </Grid>
            <Divider />
            {/* graph */}

            <Grid item sx={{
                display: 'grid', maxHeight: 400, minWidth: '410px',
            }}>
                <Grid item sx={{ maxHeight: 125, minWidth: '410px', justifyContent: 'center' }}>
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
                            <b>0</b>
                            <span style={{ fontSize: 10 }}> Configuration issue found</span>
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
                            <TaskAltIcon sx={{
                                color: '#73cbf3',
                                position: 'relative',
                                right: '108px'
                            }} />
                        }
                    >
                        <Typography variant="body1" component="span">
                            <b>0</b>
                            <span style={{ fontSize: 10 }}> Authentication risks found</span>
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid >

    )
}

export default Module1

import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Module1 from './Modules/DashBoard/Module1'
import Module3 from './Modules/DashBoard/Module3';
import Module4 from './Modules/DashBoard/Module4'
import Module4small from './Modules/DashBoard/Module4small';
import Module5 from './Modules/DashBoard/Module5';
import Module2 from './Modules/DashBoard/Module2';

//styling
import './WorkSpace.css'


export default function WorkSpace() {
    return (
        <>
            <Box sx={{
                height: 'calc(100vh - 72px)',
                width: 'calc(100vw - 127px)',

            }} >
                <Grid container spacing={0} sx={{
                    margin: 0, width: 'calc(100% )', height: 'calc(100% )',
                    float: 'right',
                    '--Grid-borderWidth': '1px',
                    borderColor: 'divider',
                    '& > div': {
                        paddingY: '32px',
                        paddingX: '25px',
                    },
                }} >
                    <Grid item sm={12} md={6} lg={4}
                        sx={{
                            // maxInlineSize: 'fit-content !important',
                            display: 'grid',
                            '--Grid-borderWidth': '1px',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',

                        }}
                        className="item" id='item1'>
                        <Module1 />

                    </Grid>
                    <Grid item sm={12} md={6} lg={4}
                        sx={{
                            // maxInlineSize: 'fit-content !important',
                            display: 'grid',
                            '--Grid-borderWidth': '1px',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',

                        }}
                        className="item" id='item2'>
                        <Module2 />

                    </Grid>
                    <Grid item sm={12} md={12} lg={4}
                        sx={{
                            // flexShrink:1,
                            // maxInlineSize: 'fit-content !important',
                            minWidth: 'auto',
                            display: 'grid',
                            '--Grid-borderWidth': '1px',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',

                        }}
                        className="item" id='item3'>
                        <Module3 />

                    </Grid>
                    <Grid item sm={12} md={4} lg={4} sx={{
                        pr: 2,
                        display: 'grid',
                        marginLeft: 0,
                        // minInlineSize: 'fit-content !important',
                    }} className="item" id='item4'>
                        <Grid item sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}>
                            <Module4 />
                        </Grid>
                        <Grid item sx={{
                            display: { xs: 'flex', md: 'none' },
                        }}>
                            <Module4small />
                        </Grid>
                    </Grid>
                    <Grid item sm={12} md={8} lg={8} sx={{

                        '--Grid-borderWidth': '1px',
                        borderLeft: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                    }} className="item" id='item5'>
                        <Module5 />
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}
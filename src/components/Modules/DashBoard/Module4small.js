import React from 'react'
import { useState } from 'react';
import Typography from '@mui/material/Typography';

import { Box, IconButton } from '@mui/material';
//imports from Module4
import { ListButtons } from './Module4';

const iconstyle = {
    color: "primary.contrastText",
    backgroundColor: "primary.main",
    borderRadius: "50%",
    width: '1.5em',
    height: '1.5em',
    padding: '8px',
}

export default function Module4small() {

    const [activeTab, setActiveTab] = useState(0)

    return (
        <>
            <Box minWidth={'300px'}>
                <Typography fontSize={21} fontWeight={600} sx={{ alignSelf: 'center', marginBottom: 2 }}>
                    Major risks
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {ListButtons.map((ListButtons, index) => (
                        <IconButton key={ListButtons.title} disablePadding size="large" sx={{ minWidth: 45, paddingX: '20px' }} onClick={() => {
                            setActiveTab(index);
                        }}>
                            <ListButtons.icon fontSize="inherit" sx={activeTab === index ? iconstyle : { border: 'solid 2px white', borderRadius: '50%', padding: '8px', width: '1.5em', height: '1.5em' }} />
                        </IconButton>
                    ))
                    }
                </Box>
            </Box>
        </>
    )
}

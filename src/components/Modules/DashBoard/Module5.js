import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';

//swiperjs
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/effect-coverflow';


//cssstyle
import "./Module5.css";

//icons
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';


const cardData = [
    {
        title: "cv - bucket",
        titleicon: WarningAmberIcon,
        content: [
            {
                subtitle: "Emails",
                icon: MailOutlineIcon,
            },
            {
                subtitle: "Credit card details",
                icon: CreditCardIcon,
            },
        ],

    },
    {
        title: "Customer files bucket",
        titleicon: WarningAmberIcon,
        content: [
            {
                subtitle: "Emails",
                icon: MailOutlineIcon,
            },
            {
                subtitle: "Credit card details",
                icon: CreditCardIcon,
            },
        ],

    },
    {
        title: "eks-dev-aws-node",
        titleicon: WarningAmberIcon,
        content: [
            {
                subtitle: "Emails",
                icon: MailOutlineIcon,
            },
            {
                subtitle: "Credit card details",
                icon: CreditCardIcon,
            },
        ],

    },
    {
        title: "Customer files bucket",
        titleicon: WarningAmberIcon,
        content: [
            {
                subtitle: "Emails",
                icon: MailOutlineIcon,
            },
            {
                subtitle: "Credit card details",
                icon: CreditCardIcon,
            },
        ],

    }
]

export default function Module5() {
    return (

        <Box sx={{ minWidth: '350px' }}>
            <Typography fontSize={21} fontWeight={600} sx={{ marginBottom: '16px' }}>
                Top 5 Data At Risk
            </Typography>
            <Swiper
                style={{
                    "--swiper-navigation-size": "25px",
                    "--swiper-navigation-color": "whitesmoke",
                }}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    // slideShadows: true,
                }}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}

                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                {cardData.map((cardData, index) => (
                    <SwiperSlide>

                        <Card id='Card' sx={{ minWidth: 220 }}>

                            <CardContent id='CardContent'>

                                <CardHeader
                                    avatar={<cardData.titleicon />}
                                    title={cardData.title}
                                />

                                {cardData.content.map((cardDatacontent, index) => (
                                    <div className="CardSubContent">
                                        <CardActions>
                                            <Button endIcon={<cardDatacontent.icon />}
                                                disableRipple
                                                sx={{ width: 1, justifyContent: "space-between", marginX: 1 }}
                                                display="flex"
                                            >{cardDatacontent.subtitle}</Button>
                                        </CardActions>
                                        <Divider />
                                    </div>
                                ))}

                            </CardContent>

                            <CardActions id='CardBtn'>
                                <Button size="small" variant='outlined' sx={{ borderRadius: 0, marginLeft: 2 }}>Learn More</Button>
                                <Button size="small" variant='outlined' sx={{ borderRadius: 0, }}>Learn More</Button>
                            </CardActions>
                            <Divider />
                            <Typography sx={{ m: 1.5 }} fontSize={10} >
                                1 day ago
                            </Typography>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper >
        </Box >

    );
}
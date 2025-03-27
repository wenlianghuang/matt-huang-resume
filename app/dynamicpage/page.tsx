'use client';
import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';

const DynamicPage: React.FC = () => {
    const images = [
        '../Image/pexels-1.jpg',
        '../Image/pexels-2.jpg',
        '../Image/pexels-3.jpg',
        '../Image/pexels-4.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // 每10秒切換圖片

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Grid container sx={{ height: '100vh' }}>
            <Box
                component="img"
                src={images[currentImageIndex]}
                alt="Slideshow"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </Grid>
    );
};

export default DynamicPage;

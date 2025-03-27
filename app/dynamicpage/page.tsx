'use client';
import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';

const DynamicPage: React.FC = () => {
    const images = [
        '../image/pexels1.jpg',
        '../image/pexels2.jpg',
        '../image/pexels3.jpg',
        '../image/pexels4.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // 每10秒切換圖片
        console.log('Image index changed to:', currentImageIndex);
        // 清除定時器以避免內存洩漏
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

'use client';
import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';

const DynamicPage: React.FC = () => {
    const images = [
        '../image/pexels-1.jpg',
        '../image/pexels-2.jpg',
        '../image/pexels-3.jpg',
        '../image/pexels-4.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 10 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Grid container direction="column" sx={{ height: '100vh' }}>
            {/* Section 1: Image Slider */}
            <Grid container>
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

            {/* Other Sections */}
            <Grid container >
                <Grid >
                    <Box sx={{ backgroundColor: '#f0f0f0', height: '100%' }}>
                        Section 2
                    </Box>
                </Grid>
                <Grid >
                    <Box sx={{ backgroundColor: '#d0d0d0', height: '100%' }}>
                        Section 3
                    </Box>
                </Grid>
            </Grid>

            <Grid container >
                <Grid >
                    <Box sx={{ backgroundColor: '#b0b0b0', height: '100%' }}>
                        Section 4
                    </Box>
                </Grid>
                <Grid >
                    <Box sx={{ backgroundColor: '#909090', height: '100%' }}>
                        Section 5
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default DynamicPage;
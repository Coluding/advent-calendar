import React from 'react';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import CalendarGrid from './components/CalendarGrid';
import videoBackground from './assets/snowflakes.webm'; // Your WebM video

const App = () => {
    return (
        <>
            <CssBaseline />
            <div
                style={{
                    position: 'relative',
                    minHeight: '100vh', // Covers the entire screen
                    overflow: 'hidden', // Ensures content stays within the bounds
                }}
            >
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Ensures the video covers the whole area
                        zIndex: -1, // Sends the video behind other elements
                    }}
                >
                    <source src={videoBackground} type="video/webm" />
                    Your browser does not support the video tag.
                </video>

                {/* Content */}
                <Container
                    maxWidth="lg"
                    sx={{
                        textAlign: 'center',
                        padding: 4,
                        borderRadius: 2,
                        zIndex: 1, // Keeps the content above the video
                        position: 'relative', // Ensures proper stacking
                    }}
                >
                    <Typography variant="h2" sx={{ color: 'black' }} gutterBottom>
                        <Box sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                            padding: 2,
                            borderRadius: 4,
                            fontFamily: 'cursive',
                        }}>
                        🎄 Adventskalender für Toni 🎅
                        </Box>
                    </Typography>
                    <CalendarGrid />
                </Container>
            </div>
        </>
    );
};

export default App;

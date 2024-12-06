import React from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import CalendarGrid from './components/CalendarGrid';
import advent from './assets/advent1.jpg'; 
import chris from './assets/CHRIS.jpg';

const App = () => {
    return (
        <>
            <CssBaseline />
            <div
                style={{
                    backgroundImage: `url(${chris})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Container maxWidth="lg" sx={{ textAlign: 'center', padding: 4, borderRadius: 2 }}>
                    <Typography variant="h2" sx={{color: "white"}} gutterBottom>
                        🎄 Adventskalender für Toni 🎅
                    </Typography>
                    <CalendarGrid />
                </Container>
            </div>
        </>
    );
};

export default App;

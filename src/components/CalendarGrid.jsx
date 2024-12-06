import React from 'react';
import { Grid, Box } from '@mui/material';
import DayCard from './DayCard';
import daysData from '../data/daysData';

const CalendarGrid = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate(); // Get the current day of the month

    return (
        <Box sx={{ padding: 3 }}>
            <Grid container spacing={2}>
                {daysData.map(({ day, content }) => (
                    <Grid item xs={6} sm={4} md={3} key={day}>
                        <DayCard
                            day={day}
                            content={content}
                            isPastOrToday={day <= currentDay} // Lock future days
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CalendarGrid;

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Tooltip } from '@mui/material';



const DayCard = ({ day, content, isPastOrToday }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (isPastOrToday) {
            setIsOpen(true);
        }
    };

    return (
        <Card
            onClick={isPastOrToday && !isOpen ? handleClick : null}
            sx={{
                cursor: isPastOrToday && !isOpen ? 'pointer' : 'not-allowed',
                backgroundColor: isOpen ? '#c9a8a5' : isPastOrToday ? '#a8524c' : '#9ba0a8',
                color: '#fff',
                textAlign: 'center',
                padding: 2,
                borderRadius: 2,
                boxShadow: 3,
                opacity: isPastOrToday ? 1 : 0.7,
                transition: 'transform 0.3s',
                '&:hover': {
                    transform: isPastOrToday && !isOpen ? 'scale(1.05)' : 'none',
                },
            }}
        >
            <CardContent>
                {!isOpen ? (
                    <Typography variant="h4">{day}</Typography>
                ) : (
                    <Typography variant="body1">{content}</Typography>
                )}
            </CardContent>
        </Card>
        
    );
};

export default DayCard;

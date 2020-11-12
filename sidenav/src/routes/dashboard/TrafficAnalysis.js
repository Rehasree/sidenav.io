import React from 'react';
import { Column, Row } from 'simple-flexbox';

import MiniCardComponent from 'components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
    
   
   
   
   
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

function TrafficAnalysis() {
    const classes = useStyles();
    return (
        <div>Traffic Analysis</div>
    );
}

export default TrafficAnalysis;

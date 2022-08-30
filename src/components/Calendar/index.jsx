import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './styles.module.css';

export default class Calendar extends React.Component {
    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
            />
        )
    }
}

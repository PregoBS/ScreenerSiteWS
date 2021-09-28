import init_data from '../components/emptyData';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import RouteLinks from '../components/RouteLinks.js';

function AppB3_BarCharts_Ibov() {
    const [data, setData] = useState(init_data);
    const [numbUsers, setNumbUsers] = useState(0);

    useEffect(() => {
        const socket = io('http://localhost:3001', { transports: ['websocket'] });
        socket.on('b3ibov-data', (wsdata) => setData(wsdata));
        socket.on('users', (nUsers) => setNumbUsers(nUsers));
        return () => {
            setData(init_data);
            setNumbUsers(0);
            socket.disconnect();
        };
    }, []);
    
    return (
        <>
            <RouteLinks users={numbUsers} />
        </>
    );
}

export default AppB3_BarCharts_Ibov;
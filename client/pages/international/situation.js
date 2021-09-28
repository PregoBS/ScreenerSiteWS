import Block from '../components/Block';
import init_data from '../components/emptyData';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import RouteLinks from '../components/RouteLinks.js';

function AppInternational_Situation() {
    const [data, setData] = useState(init_data);
    const [numbUsers, setNumbUsers] = useState(0);

    useEffect(() => {
        const socket = io('http://localhost:3001', { transports: ['websocket'] });
        socket.on('international-data', (wsdata) => setData(wsdata));
        socket.on('users', (nUsers) => setNumbUsers(nUsers));
        return () => {
            setData(init_data);
            setNumbUsers(0);
            socket.disconnect();
        };
    }, []);

    var tf1 = "M5";
    var tf2 = "M15";
    var tf3 = "H1";
    
    return (
        <>
            <RouteLinks users={numbUsers} />
            <Block timeframe={tf1} data={data[tf1]} />
            <Block timeframe={tf2} data={data[tf2]} />
            <Block timeframe={tf3} data={data[tf3]} />
        </>
    );
}

export default AppInternational_Situation;
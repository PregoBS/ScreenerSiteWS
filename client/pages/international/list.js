import init_data from '../components/emptyData';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import ListTable from '../components/ListTable.js';
import RouteLinks from '../components/RouteLinks.js';

function AppInternational_List() {
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

    return (
        <>
            <RouteLinks users={numbUsers} />
            <br></br>
            <ListTable />
        </>
    );
}

export default AppInternational_List;
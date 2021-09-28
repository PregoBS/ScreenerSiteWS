import '../_app.js';
import init_data from '../components/emptyData';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import RouteLinks from '../components/RouteLinks.js';

function AppInternational_Setup() {
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
            <div className="description">
                <br></br>
                <h1>EM CONSTRUÇÃO!</h1>
                <br></br>
                <p>
                    Em breve listas<br></br>
                    com sinais em tempo real<br></br>
                    de acordo com os<br></br>
                    setups das estratégias<br></br>
                    <br></br>
                    Timeframes:<br></br>
                    | M5 | M15 | H1 |<br></br>
                    <br></br>
                    Mercados:<br></br>
                    | Ações | Forex | ETFs | CFDs | Índices |<br></br>
                    <br></br>
                    Estratégias Setup:<br></br>
                    | ---- | ---- | ---- | ---- |<br></br>
                    <br></br>
                </p>
            </div>
        </>
    );
}

export default AppInternational_Setup;
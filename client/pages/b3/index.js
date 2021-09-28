import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import RouteLinks from '../components/RouteLinks.js';

function AppB3() {
    const [numbUsers, setNumbUsers] = useState(0);

    useEffect(() => {
        const socket = io('http://localhost:3001', { transports: ['websocket'] });
        socket.on('users', (nUsers) => setNumbUsers(nUsers));
        return () => {
            setNumbUsers(0);
            socket.disconnect();
        };
    }, []);

    return (
        <>
            <RouteLinks users={numbUsers} />
            <div className="description">
                <h1>DESCRIÇÃO DOS SCREENERS SETUP E SITUAÇÃO</h1>
                <br></br>
                <p>
                    Algumas informações<br></br>
                    sobre o funcionamento<br></br>
                    dos Screeners Setup e Situação<br></br>
                    e sua finalidade.<br></br>
                    <br></br>
                    Timeframes:<br></br>
                    | M5 | M15 | H1 |<br></br>
                    <br></br>
                    Mercados:<br></br>
                    | Ações | Futuros |<br></br>
                    <br></br>
                    Estratégias Setup:<br></br>
                    | ---- | ---- | ---- | ---- |<br></br>
                    <br></br>
                    Estratégias Situação:<br></br>
                    | Retração de Fibonacci | Retorno à Média | Distorção | Antecipação |<br></br>
                    <br></br>
                </p>
            </div>
        </>
    );
}

export default AppB3;
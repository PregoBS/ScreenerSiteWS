import './_app.js';
import io from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import RouteLinks from './components/RouteLinks.js';

function App() {
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
                <h1>DESCRIÇÃO DOS SCREENERS</h1>
                <br></br>
                <p>
                    Algumas informações<br></br>
                    sobre o funcionamento<br></br>
                    dos Screeners e sua finalidade.<br></br>
                    <br></br>
                    Timeframes:<br></br>
                    | M5 | M15 | H1 |<br></br>
                    <br></br>
                    Mercados:<br></br>
                    | Ações | Criptoativos | Forex | ETFs | CFDs | Índices |<br></br>
                    <br></br>
                </p>
            </div>
        </>
    );
}

export default App;

import React from 'react';

function TableHead1 () {
    return (
        <thead>
            <tr>
                <th style={{width: '72px'}}>ATIVO</th>
                <th style={{width: '67px'}}>CLOSE</th>
                <th style={{width: '52px', fontSize: '13px'}}>ATR %</th>
                <th style={{width: '62px', fontSize: '12px'}}>SIGNAL</th>
                <th style={{width: '60px'}}>RISCO</th>
                <th style={{width: '60px'}}>ALVO</th>
            </tr>
        </thead>
    );
}

export default TableHead1;
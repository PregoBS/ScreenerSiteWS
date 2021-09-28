import React from 'react';
import style from './BlockTable.module.css';

function BlockTable(props) {
    return (
        <div className={style.bloco_table}>
            <h1>{props.strategyTitle}</h1>
            <br></br>
            { props.children }
        </div>
    );
}

export default BlockTable;
import React from 'react';

function BlockScreener(props) {
    return (
        <div className={props.class}>
            { props.children }
        </div>
    );
}

export default BlockScreener;
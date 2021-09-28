import React from 'react';
import ReactDOM from 'react-dom';
import TableHead2 from './TableHead2';

function Table2(props) {
    return (
        <table className="sortable">
            <TableHead2 />
            { props.children }
            <tfoot>
            </tfoot>
        </table>
    );
}

export default Table2;
import React from 'react';
import ReactDOM from 'react-dom';
import TableHead1 from './TableHead1';

function Table1(props) {
    return (
        <table className="sortable">
            <TableHead1 />
            { props.children }
            <tfoot>
            </tfoot>
        </table>
    );
}

export default Table1;
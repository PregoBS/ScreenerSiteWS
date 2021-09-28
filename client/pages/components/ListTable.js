import React from 'react';
import ReactDOM from 'react-dom';
import SortTable from '../components/SortTable.js';
import style from './ListTable.module.css';

function ListTable() {
    return (
        <div className={style.bloco}>
            <div className={style.blocotable}>
                <table className='sortable'>
                    <thead>
                        <tr>
                            <th style={{width: '72px'}}>ATIVO</th>
                            <th style={{width: '150px'}}>SETOR</th>
                            <th style={{width: '150px'}}>SUB-SETOR</th>
                            <th style={{width: '150px'}}>ESPECIFICAÇÃO</th>
                            <th style={{width: '67px'}}>CLOSE</th>
                            <th style={{width: '50px'}}>ATR %</th>
                            <th style={{width: '50px'}}>VAR %</th>
                            <th style={{width: '55px'}}>DIST %</th>
                            <th style={{width: '50px'}}>ALVO</th>
                            <th style={{width: '50px'}}>ROMP</th>
                            <th style={{width: '50px'}}>RM 34</th>
                            <th style={{width: '50px'}}>RETR FIBO</th>
                            <th style={{width: '50px'}}>ANTE-CIPA</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>AAPL</td>
                            <td>TECNOLOGIA</td>
                            <td> --- </td>
                            <td> --- </td>
                            <td>148.92</td>
                            <td>1.87</td>
                            <td>-3.25</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>TSLA</td>
                            <td>TECNOLOGIA</td>
                            <td> --- </td>
                            <td> --- </td>
                            <td>735.19</td>
                            <td>2.67</td>
                            <td>-2.56</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default ListTable;
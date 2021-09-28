import DynamicContent1 from './DynamicContent1';
import DynamicContent2 from './DynamicContent2';
import BlockScreener from './BlockScreener';
import BlockTable from './BlockTable';
import React from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
import TableBody from './TableBody';
import style from './Block.module.css';
import styleBlockScreener from './BlockScreener.module.css';

function Block(props) {
    return (
        <div className={style.bloco}>
            <div className={style.title}>
                <h1>TIMEFRAME {props.timeframe}</h1>
            </div>
            <BlockTable strategyTitle="Retração de Fibonacci">
                <BlockScreener class={styleBlockScreener.screenerlarge}>
                    <Table1>
                        <TableBody>
                            <DynamicContent1 data={props.data} strategy="fibonacci" />
                        </TableBody>
                    </Table1>
                </BlockScreener>
            </BlockTable>

            <BlockTable strategyTitle="Retorno à Média">
                <BlockScreener class={styleBlockScreener.screenerlarge}>
                    <Table1 id="rm">
                        <TableBody>
                            <DynamicContent1 data={props.data} strategy="rm" />
                        </TableBody>
                    </Table1>
                </BlockScreener>
            </BlockTable>

            <BlockTable strategyTitle="Distorção">
                <BlockScreener class={styleBlockScreener.screener}>
                    <Table2>
                        <TableBody>
                            <DynamicContent2 data={props.data} strategy="distortion" />
                        </TableBody>
                    </Table2>
                </BlockScreener>
            </BlockTable>

            <BlockTable strategyTitle="Antecipação">
                <BlockScreener class={styleBlockScreener.screener}>
                    <Table2>
                        <TableBody>
                            <DynamicContent2 data={props.data} strategy="antecipate" />
                        </TableBody>
                    </Table2>
                </BlockScreener>
            </BlockTable>
        </div>
    );
}

export default Block;
import React from 'react';
import style from './DynamicContent.module.css';

function DynamicContent2(props) {
    const jsonData = props.data;
    const strategy = props.strategy;
    if (jsonData === undefined) {
        return (<></>);
    } else {
        const data = jsonData[strategy];
        const results = [];

        for (let i = 0, len=data.length; i < len; i++) {
            if (data[i].Close != 0) {
                let close_class = data[i].closeClass;
                let symb_class = data[i].symbolClass;

                if (data[i].DstLvl != 0 || data[i].Alvo2nd == 0) {
                    let dst_lvl = "dstlvl" + data[i].DstLvl;

                    results.push(
                        <tr key={data[i].key}>
                            <td className={style[symb_class]}>{data[i].Symbol}</td>
                            <td className={style[close_class]}>{data[i].Close}</td>
                            <td>{data[i].ATR}</td>
                            <td className={style[dst_lvl]}>{data[i].Signal}</td>
                        </tr>
                    )
                }
            }
        }
        return (
            <>
                {results}
            </>
        );
    }
}

export default DynamicContent2;
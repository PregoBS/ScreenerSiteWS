import Link from 'next/link';
import React from 'react';
import style from './RouteLinks.module.css';

function RouteLinks(props) {
    return (
        <>
            <div>Usuários Online: {props.users}</div>
            <div className={style.homelink}>
                <Link href="/">HOME</Link>
            </div>
            <div className={style.links}>
                <div className={style.sublinks}>
                    <div className={style.link}>
                        <Link href="/international">INTERNATIONAL SCREENER</Link>
                        <br></br>
                        <div className={style.sublink}>
                            <Link href="/international/setup">-&gt; SETUP</Link>
                            <br></br>
                            <Link href="/international/situation">-&gt; SITUAÇÃO</Link>
                            <br></br>
                            <Link href="/international/list">-&gt; LIST</Link>
                            <br></br>
                            <Link href="/international/barcharts">-&gt; BARCHARTS</Link>
                        </div>
                    </div>
                </div>
                <div className={style.sublinks}>
                    <div className={style.link}>
                        <Link href="/b3">B3 SCREENER</Link>
                        <br></br>
                        <div className={style.sublink}>
                            <Link href="/b3/setup">-&gt; IBOV: SETUP</Link>
                            <br></br>
                            <Link href="/b3/situation">-&gt; IBOV: SITUAÇÃO</Link>
                            <br></br>
                            <Link href="/b3/list-ibov">-&gt; IBOV: LIST</Link>
                            <br></br>
                            <Link href="/b3/barcharts-ibov">-&gt; IBOV: BARCHARTS</Link>
                            <br></br>
                            <Link href="/b3/list-b3">-&gt; B3: LIST</Link>
                            <br></br>
                            <Link href="/b3/barcharts-b3">-&gt; B3: BARCHARTS</Link>
                        </div>
                    </div>
                </div>
                <div className={style.sublinks}>
                    <div className={style.link}>
                        <Link href="/cripto">CRIPTO SCREENER</Link>
                        <br></br>
                        <div className={style.sublink}>
                            <Link href="/cripto/setup">-&gt; SETUP</Link>
                            <br></br>
                            <Link href="/cripto/situation">-&gt; SITUAÇÃO</Link>
                            <br></br>
                            <Link href="/cripto/list">-&gt; LIST</Link>
                            <br></br>
                            <Link href="/cripto/barcharts">-&gt; BARCHARTS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RouteLinks;
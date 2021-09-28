import React from 'react';
import Script from 'next/script';

function SortTable() {
    return (
        <>
            <Script
                src="https://www.kryogenix.org/code/browser/sorttable/sorttable.js"
                strategy="beforeInteractive"
            />
        </>
    );
}

export default SortTable;
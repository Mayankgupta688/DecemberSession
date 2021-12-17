import Axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';

function useStockData() {
    var [stock, setStock] = useState(400);
    var [nalcoStock, setNalcoStock] = useState(100);
    var [data, setData] = useState(0);

    setTimeout(() => {
        Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI", {
            
        }).then((responseSbi) => {
            setStock(responseSbi.data.data.pricecurrent);
        })

        Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC").then((responseNalco) => {
            setNalcoStock(responseNalco.data.data.pricecurrent);
        })
    }, 2000)

    function updateData() {
        setData(10);
    }

    return [stock, nalcoStock, data, updateData];
}

export default function StockExchangeComponent() {

    var [sbiStockPrice, nalcoStock, data, updateData] = useStockData();

    setTimeout(() => {
        debugger;
        updateData();
    }, 5000)

    return (
        <div>
            <h1>Listing Interesting Stocks</h1>
            <h3>Sbi Stock Value {sbiStockPrice}</h3>
            <h3>Sbi Stock Value {nalcoStock}</h3><hr/><hr/>
            <StockExchangeComponentChild></StockExchangeComponentChild>
        </div>
    )
}


function StockExchangeComponentChild() {

    var [sbiStockPrice, nalcoStock,data] = useStockData();

    return (
        <div>
            <h1>Most Interestingg Stock is {data}:</h1>
            <h3>Sbi Stock Value {sbiStockPrice}</h3>
            <h3>Sbi Stock Value {nalcoStock}</h3>
        </div>
    )
}
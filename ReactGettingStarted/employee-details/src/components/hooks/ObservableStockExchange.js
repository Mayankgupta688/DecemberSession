import Axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Observable } from "rxjs";

export default function ObservableStockExchangeComponent() {

    var [stock, setStock] = useState({
        sbiStock: 0,
        nalcoStock: 0,
        coscoStock: 0
    })

    var sbiObservable = null;
    var coscoObservable = null
    var nalcoObservable = null;
    var coscoSubscription = null;
    var nalcoSubscription = null
    var sbiSubscription = null;

    sbiObservable = new Observable((observer) => {
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((responseSbi) => {
                observer.next(responseSbi.data.data.pricecurrent);
            })
        }, 1000);
    });

    coscoObservable = new Observable((observer) => {
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/CI18").then((responseCosco) => {
                observer.next(responseCosco.data.data.pricecurrent);
            })
        }, 1000);
    });

    nalcoObservable = new Observable((observer) => {
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC").then((responseNalco) => {
                observer.next(responseNalco.data.data.pricecurrent);
            })
        }, 1000);
    });

    useEffect(() => {
        return () => {
            nalcoSubscription.unsubscribe();
            sbiSubscription.unsubscribe();
            coscoSubscription.unsubscribe()
        }
    }, [])

    function subscribeNalco() {
        nalcoSubscription = nalcoObservable.subscribe((data) => {

            setStock((stock) => {
                return {
                    ...stock,
                    nalcoStock: data
                }
            })
        })
    }

    function subscribeSbi() {
        sbiSubscription = sbiObservable.subscribe((data) => {
            setStock((stock) => {
                return {
                    ...stock,
                    sbiStock: data
                }
            })
        })
    }

    function subscribeCosco() {
        coscoSubscription = coscoObservable.subscribe((data) => {

            setStock((stock) => {
                return {
                    ...stock,
                    coscoStock: data
                }
            })
        })
    }

    
    return (
        <div>
            <h1>Listing Interesting Stocks</h1>
            <h3>Sbi Stock Value {stock.sbiStock}</h3>
            <input type="button" onClick={subscribeSbi} value="Subscribe" />
            <h3>Nalco Stock Value {stock.nalcoStock}</h3>
            <input type="button" onClick={subscribeNalco} value="Subscribe" />
            <h3>Cosco Stock Value {stock.coscoStock}</h3>
            <input type="button" onClick={subscribeCosco} value="Subscribe" />
        </div>
    )
}
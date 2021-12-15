import Axios from 'axios';
import React from 'react';
import { Observable } from "rxjs";

export default class ObservableStockExchangeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            stock: {
                sbiStock: 0,
                nalcoStock: 0,
                coscoStock: 0
            }
        }

        this.subscribeSbi = this.subscribeSbi.bind(this);
        this.subscribeNalco = this.subscribeNalco.bind(this);
        this.subscribeCosco = this.subscribeCosco.bind(this)

    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.stock.nalcoStock !== nextState.stock.nalcoStock || this.state.stock.sbiStock !== nextState.stock.sbiStock || this.state.stock.coscoStock !== nextState.stock.coscoStock) {
            return true
        }
        return false;
    }

    componentDidMount() {

        this.sbiObservable = new Observable((observer) => {
            debugger;
            setInterval(() => {
                Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((responseSbi) => {
                    observer.next(responseSbi.data.data.pricecurrent);
                })
            }, 1000);
        });

        this.coscoObservable = new Observable((observer) => {
            setInterval(() => {
                Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/CI18").then((responseCosco) => {
                    observer.next(responseCosco.data.data.pricecurrent);
                })
            }, 1000);
        });

        this.nalcoObservable = new Observable((observer) => {
            setInterval(() => {
                Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC").then((responseNalco) => {
                    observer.next(responseNalco.data.data.pricecurrent);
                })
            }, 1000);
        });
    }

    subscribeNalco() {
        this.nalcoSubscription = this.nalcoObservable.subscribe((data) => {
            this.setState({
                stock: {
                    ...this.state.stock,
                    nalcoStock: data
                }
            })
        })
    }

    subscribeSbi() {
        this.sbiSubscription = this.sbiObservable.subscribe((data) => {
            this.setState({
                stock: {
                    ...this.state.stock,
                    sbiStock: data
                }
            })
        })
    }

    subscribeCosco() {
        this.coscoSubscription = this.coscoObservable.subscribe((data) => {
            this.setState({
                stock: {
                    ...this.state.stock,
                    coscoStock: data
                }
            })
        })
    }

    render() {
        console.log("Re-rendered...")
        return (
            <div>
                <h1>Listing Interesting Stocks</h1>
                <h3>Sbi Stock Value {this.state.stock.sbiStock}</h3>
                <input type="button" onClick={this.subscribeSbi} value="Subscribe" />
                <h3>Nalco Stock Value {this.state.stock.nalcoStock}</h3>
                <input type="button" onClick={this.subscribeNalco} value="Subscribe" />
                <h3>Cosco Stock Value {this.state.stock.coscoStock}</h3>
                <input type="button" onClick={this.subscribeCosco} value="Subscribe" />
            </div>
        )
    }

    componentWillUnmount() {
        this.nalcoSubscription.unsubscribe();
        this.sbiSubscription.unsubscribe();
        this.coscoSubscription.unsubscribe()
    }
}
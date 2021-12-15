import Axios from 'axios';
import React from 'react';

export default class StockExchangeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            sbiStock: 0,
            nalcoStock: 0,
            coscoStock: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.nalcoStock !== nextState.nalcoStock || this.state.sbiStock !== nextState.sbiStock || this.state.coscoStock !== nextState.coscoStock) {
            return true
        }
        return false;
    }

    componentDidMount() {
        setInterval(() => {
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/CI18").then((responseCosco) => { 
                this.setState({
                    ...this.state,
                    coscoStock: responseCosco.data.data.pricecurrent
                })
            })

            Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC").then((responseNalco) => {
                this.setState({
                    ...this.state,
                    nalcoStock: responseNalco.data.data.pricecurrent
                })
            })

            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((responseSbi) => {
                this.setState({
                    ...this.state,
                    sbiStock: responseSbi.data.data.pricecurrent,
                })
            })
        }, 1000)
    }

    render() {
        console.log("Re-rendered...")
        return (
            <div>
                <h1>Listing Interesting Stocks</h1>
                <h3>Sbi Stock Value {this.state.sbiStock}</h3>
                <h3>Nalco Stock Value {this.state.nalcoStock}</h3>
                <h3>Cosco Stock Value {this.state.coscoStock}</h3>
            </div>
        )
    }
}
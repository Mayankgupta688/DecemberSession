import Axios from 'axios';
import React from 'react';

export default class StockExchangePureComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            stock: {
                sbiStock: 0,
                nalcoStock: 0,
                coscoStock: 0
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.stock.nalcoStock !== nextState.stock.nalcoStock || this.state.stock.sbiStock !== nextState.stock.sbiStock || this.state.stock.coscoStock !== nextState.stock.coscoStock) {
            return true
        }
        return false;
    }

    componentDidMount() {
        setInterval(() => {
            debugger;
            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/CI18").then((responseCosco) => { 
                this.setState({
                    stock: {
                        ...this.state.stock,
                        coscoStock: responseCosco.data.data.pricecurrent
                    }
                });
            })

            Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC").then((responseNalco) => {
                this.setState({
                    stock:{
                        ...this.state.stock,
                        nalcoStock: responseNalco.data.data.pricecurrent
                    }
                });
            })

            Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").then((responseSbi) => {
                this.setState({
                    stock:{
                        ...this.state.stock,
                        sbiStock: responseSbi.data.data.pricecurrent
                    }
                });
            })
        }, 1000)
    }

    render() {
        console.log("Re-rendered...")
        return (
            <div>
                <h1>Listing Interesting Stocks</h1>
                <h3>Sbi Stock Value {this.state.stock.sbiStock}</h3>
                <h3>Nalco Stock Value {this.state.stock.nalcoStock}</h3>
                <h3>Cosco Stock Value {this.state.stock.coscoStock}</h3>
            </div>
        )
    }
}
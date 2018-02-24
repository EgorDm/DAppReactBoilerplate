import React, {Component} from 'react';
import {connect} from "react-redux";
import {greet,getInstance} from '../services/greeter_service'
import {getAccount} from "../helpers/chain";

@connect(store => {
    return store.app;
})
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = { balance: null, greeting: null, account: null };
    }

    componentDidMount() {
        getAccount().then(account => {
            this.setState({ account });

            web3.eth.getBalance(account).then(balance => {
                this.setState({ balance });
            });

            greet().then(greeting => {
                this.setState({ greeting });
            });
        });

    }

    render() {
        if(!this.state.account) return <p>No accounts</p>;

        return <div>
            <h1>Account: {this.state.account ? this.state.account : 'Unknown'}</h1>
            <h2>Balance: {this.state.balance ? this.state.balance : 'Unknown'}</h2>
            <h2>Greeting: {this.state.greeting ? this.state.greeting : 'Unknown'}</h2>
        </div>;
    }
}
import React ,{useContext}from 'react';
import {GlobalContext} from '../context/GlobalState'
export const Balance =() =>{
    const { transactions } = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = ()=>{
        let balance=0;
        for (var i = 0; i < transactionAmounts.length; i++){
            if (transactionAmounts[i] > 0||transactionAmounts[i] < 0)
                balance= balance + transactionAmounts[i]
        }
        return balance
}
    return (
        <div>
            <h4>Current Balance</h4>
            <h1 id="balance">{balance()}</h1>
        </div>
    )
}
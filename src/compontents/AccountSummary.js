import React ,{useContext}from 'react';
import {GlobalContext} from '../context/GlobalState'

 export const AccountSummary= () =>{
    const { transactions } = useContext(GlobalContext);

     const income = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].transactionAmount > 0)
                income = income + transactions[i].transactionAmount
        }
        return income;
    }

     const expense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].transactionAmount < 0)
                expense += transactions[i].transactionAmount
        }
        return expense;
    }
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{income()}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{expense()}</p>
            </div>
        </div>
    ) 
 }
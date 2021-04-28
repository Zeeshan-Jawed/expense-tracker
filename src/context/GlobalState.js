import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initial={
    transactions:[
        // {id:1,description:"Project 1 Income",transactionAmount:10000},
        // {id:2,description:"Project 2 Income",transactionAmount:20000},
        // {id:3,description:"Project 1 Expense",transactionAmount:-5000},
        // {id:4,description:"Project 2 Expense",transactionAmount:-10000}
    ]}
    
export const GlobalContext =createContext(initial);

export const GlobalProvider=({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initial)

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}

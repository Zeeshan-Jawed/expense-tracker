import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

 export const TransactionHistory= () =>{
     let {transactions}=useContext(GlobalContext)
    return (
        <div>
           <h3>Transaction History</h3>
           <ul className="list">
           {transactions.map((transobj,ind)=>{
               return (<li className="plus" key={ind}>{transobj.description}
               <span>{transobj.transactionAmount}</span>
               </li>)
           })}
               
           </ul>
        </div>
    ) 
 }
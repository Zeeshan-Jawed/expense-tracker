import React from 'react';
 export const TransactionHistroy= () =>{
    return (
        <div>
           <h3>Transaction History</h3>
           <ul className="list">
               <li className="plus">Project Income
               <span>10,000$</span>
               <button className="delete-btn">X</button></li>
               <li className="minus">Salary
               <span>-10,00$</span>
               <button className="delete-btn">X</button>
               </li>
           </ul>
        </div>
    ) 
 }
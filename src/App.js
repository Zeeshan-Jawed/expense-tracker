import React from 'react';
import {Header} from './compontents/Header';
import {Balance} from './compontents/Balance';
import {AccountSummary} from './compontents/AccountSummary';
import {AddTransaction} from './compontents/AddTransaction';
import { TransactionHistroy } from './compontents/TransactionHistory';
import './App.css';


function App() {
  return (
    <div >
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistroy />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;

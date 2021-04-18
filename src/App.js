import React from 'react';
import {Header} from './compontents/Header';
import {Balance} from './compontents/Balance';
import {AccountSummary} from './compontents/AccountSummary';
import {AddTransaction} from './compontents/AddTransaction';
import { TransactionHistory } from './compontents/TransactionHistory';
import './App.css';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

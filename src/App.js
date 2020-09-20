// Expense Tracker App project 

import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import AccountSummary from './components/AccountSummary'
import TransictionHistory from './components/TransictionHistory'
import AddTransiction from './components/AddTransiction';
import {GlobalProvider} from './context/store';

function App() {
    return (
        <div>
            <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <AccountSummary />
                <TransictionHistory />
                <AddTransiction />
            </div>
            </GlobalProvider>
        </div>
    )
}

export default App

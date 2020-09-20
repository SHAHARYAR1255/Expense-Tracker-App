import React, {useContext} from 'react';
import {GlobalContext} from '../context/store';

function AccountSummary() {
    const {transactions} = useContext(GlobalContext);

    const transactionAmount = transactions.map(transaction => transaction.amount);

    const  income = transactionAmount
                        .filter(transaction => transaction > 0)
                        .reduce((acc, transaction)=> (acc += transaction), 0)
                        .toFixed(2);

    const expense = Math.abs(transactionAmount
                        .filter(amount => amount < 0)
                        .reduce((acc,amount)=> (acc += amount), 0)
                        ).toFixed(2)

    return (             
        <div>
            <h2>Summary</h2>
            <h6>income {income}</h6>
            <h6>expense {expense}</h6>
        </div>
    )
};
export default AccountSummary
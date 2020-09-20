import React, {useContext} from 'react'
import { GlobalContext } from '../context/store'

function Balance() {
    const {transactions} = useContext(GlobalContext);
    const transactionAmount = transactions.map(transaction => transaction.amount);
    console.log(transactionAmount);
    const transactionAmounts = transactionAmount.map(amount => Number(amount));
    console.log(transactionAmounts);
    const balance = Math.abs(transactionAmounts.reduce((total, amount)=> total += amount , 0)).toFixed(2);

    return (
        <div>
            <h>balance {balance}</h>        
        </div>
    )
}

export default Balance

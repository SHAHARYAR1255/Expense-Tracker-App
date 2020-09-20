import React, {useContext} from 'react'
import { GlobalContext } from '../context/store'

function Balance() {
    const {transactions} = useContext(GlobalContext);
    const transactionAmount = transactions.map(transaction => transaction.amount);
    const balance = transactionAmount.reduce((total, amount)=> total += amount , 0);

    return (
        <div>
            <h>balance {balance}</h>        
        </div>
    )
}

export default Balance

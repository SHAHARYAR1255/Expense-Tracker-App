import React, {useContext} from 'react';
import {GlobalContext} from '../context/store';

function TransictionHistory() {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return (
        <div>
        <h3>Transaction History</h3>
       <ul>
            {  transactions.map(transaction =>{
                return (
                    <TransactionList key={transaction.id} transaction={transaction} />
                )
    })}
       </ul>
       </div>
    )
};

const TransactionList = ({transaction})=>{
    const sign = transaction.amount > 0 ? '+' : '-' ;
    const {delTrans} = useContext(GlobalContext);
    const handleDelete = ()=>{
        delTrans(transaction.id);
    }

    return(
        <li>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={handleDelete} className="btn btn-danger">delete</button>
        </li>
    );
}

export default TransictionHistory

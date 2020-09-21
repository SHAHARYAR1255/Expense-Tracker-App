import React, {useContext} from 'react';
import {GlobalContext} from '../context/store';
import {Card, CardBody, CardHeader, Button, ListGroup, ListGroupItem} from 'reactstrap';
import './TransactionHistory.css';

function TransictionHistory() {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return (
        <div>
        <h3 >Transaction History</h3>
        <ListGroup>
            {  transactions.map(transaction =>{
                return (
                    <TransactionList key={transaction.id} transaction={transaction} />
                )
    })}
        </ListGroup>
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
      
           <ListGroupItem className="col-8" color={"success"}><span>{transaction.description}</span><span>{sign}{transaction.amount}</span><Button onClick={handleDelete}>X</Button></ListGroupItem>
    );
}

export default TransictionHistory

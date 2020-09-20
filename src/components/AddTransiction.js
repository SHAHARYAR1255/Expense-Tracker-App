import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/store';

function AddTransiction() {
    const [balance, setbalance] = useState(0);
    const [description, setdescription] = useState('');
    const {addTrans} = useContext(GlobalContext);
    const handleSubmit = (e) =>{
        e.preventDefault();

        const transaction = {
            id : new Date().getSeconds(),
            description ,
            amount : balance
        };

        addTrans(transaction);
        setbalance(0);
        setdescription('')
    }

    return (
        <div>
            <form className="container" >
                <div className="row ">
                    <label className="col-12" htmlFor="description">Description</label>
                    <input className="col-6" value={description} onChange={e => setdescription(e.target.value)} type="text" name="description" placeholder="put your description" />
                </div>
                <div className="row ">
                    <label className="col-12" htmlFor="balance" placeholder="balance ">Balance</label>
                    <input value={balance} className="col-6" onChange={e => setbalance(e.target.value)} type="number" name="balance" />
                </div>
                <button onClick={handleSubmit} className="btn btn-danger">add</button>
            </form>

        </div>
    )
}

export default AddTransiction

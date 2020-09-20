import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/store';

function AddTransiction() {
    const [balance, setbalance] = useState();
    const [description, setdescription] = useState('');
    const {addTrans} = useContext(GlobalContext);
    const handleSubmit = (e) =>{
        e.preventDefault();

        const transaction = {
            id : new Date().getSeconds(),
            description ,
            amount :balance
        };

        addTrans(transaction);
        setbalance();
        setdescription('')
    }

    return (
        <div>
            <form >
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input value={description} onChange={e => setdescription(e.target.value)} type="text" name="description" placeholder="put your description" />
                </div>
                <div className="form-control">
                    <label htmlFor="balance" placeholder="balance ">Balance</label>
                    <input value={balance} onChange={e => setbalance(e.target.value)} type="number" name="balance" />
                </div>
                <button onClick={handleSubmit} className="btn">add</button>
            </form>

        </div>
    )
}

export default AddTransiction

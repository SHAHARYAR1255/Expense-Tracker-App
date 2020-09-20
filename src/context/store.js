import React, {useContext, useReducer} from 'react';
import {reducer} from './reducer';

const initialState = {
    transactions : [
    ]
};

export const  GlobalContext = React.createContext(initialState);



// create a provider for GlobalContext

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    
//add an action to delete transactio
const delTrans = id =>{
    dispatch({
        type:'DELETE_TRANSACTION',
        payload : id
    });
    console.log(state);
};

const addTrans = transaction =>{
    dispatch({
        type: 'ADD_TRANSACTION',
        payload : transaction
    })};


    return (
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        delTrans, addTrans
    }}>
        {children}
    </GlobalContext.Provider>
    )
}

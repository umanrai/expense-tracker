import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(
                        transaction => <Transaction key={transaction.id}
                        {...transaction}
                        //  text={transaction.text} 
                        //  id={transaction.id}
                        //   amount={transaction.amount} 
                          />
                    )
                }
            </ul>
        </>
    )
}

export default TransactionList

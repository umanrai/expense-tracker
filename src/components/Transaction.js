import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// const Transaction = ({ transaction }) => {
//     const { deleteTransaction } = useContext(GlobalContext);

//     const sign = transaction.amount < 0 ? '-' : '+';
//     const {text} = transaction

//     return (
//         <>
//             <li className={ transaction.amount < 0 ? 'minus' : 'plus' }>
//                  {text} <span>{sign}रू{Math.abs(transaction.amount)}</span>
//                 <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
//             </li>
//         </>
//     )
// }

const Transaction = ({  amount, text, id }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    // const { amount, text, id } = transaction;
    const sign = amount < 0 ? '-' : '+';
    return (
        <>
            <li className={ amount < 0 ? 'minus' : 'plus' }>
                 {text} <span>{sign}रू{Math.abs(amount)}</span>
                <button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
            </li>
        </>
    )
}

export default Transaction

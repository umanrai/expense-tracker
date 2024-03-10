import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

import { fetchAmounts, totalAmounts } from '../utils';
import BoxWidget from './partials/BoxWidget';

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = fetchAmounts(transactions);

    const total = totalAmounts(amounts);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (

        <div className="inc-exp-container">

            <BoxWidget classes="plus" title="Income" num={income} />
            <BoxWidget classes="minus" title="Expense" num={expense} />

            {/* <div>
                <h4>Income</h4>
                <Paragraph classes="money plus" text={"रू" + income} />
            </div>
            <div>
                <h4>Expense</h4>
                <Paragraph classes="money minus" text={"रू" + expense} />
            </div> */}
        </div>


    )
}

export default IncomeExpenses

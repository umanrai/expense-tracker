import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { fetchAmounts, totalAmounts } from '../utils'

const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = fetchAmounts(transactions);

  const total = totalAmounts(amounts);

  return (
    <> 
    {/* // Fragment */}
      <h4>Your Balance</h4>
      <h1>रू{total}</h1>
    </> 
  )
}

export default Balance

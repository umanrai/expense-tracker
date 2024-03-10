const fetchAmounts = (transactions) => transactions.map(transaction => transaction.amount)

const totalAmounts = (amounts) => {

    // const amounts = fetchAmounts(transactions)

    return amounts.reduce((total, amount) => (total += amount), 0).toFixed(2)
}

export {
    fetchAmounts,
    totalAmounts,
}
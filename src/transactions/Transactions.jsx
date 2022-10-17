import { useState, useEffect } from "react";

import './Transactions.css'

function Transactions() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8080/api/v1/transactions")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setTransactions(result.transactions);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])



      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                <h1>Transactie overzicht</h1>
                <div className="container">
                    <h2>Deze maand</h2>
                    <div>
                        {transactions.map(transaction => (
                            <div className="transaction" key={transaction.id}>
                                <div className="transaction-amount">
                                    <span className='amount-debit'>
                                        &euro; {transaction.amount}
                                    </span>
                                </div>
                                <div className="transaction-description">{transaction.description}</div>
                                <div className="transaction-date">{transaction.dateTime}</div>
                            </div>
                        ))}
    
                    </div>
                </div>
            </div>
        );
      }


}

export default Transactions;
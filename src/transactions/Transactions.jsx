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
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      const dateConvertor = (dateAsString) => {
        return new Date(dateAsString).toLocaleString('nl-NL', {dateStyle: 'medium'})
      };

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                <h1>Transactie overzicht</h1>
                <div className="container">
                    <h2>Alle transacties</h2>
                    <div>
                        {transactions.map(transaction => (
                            <div className="transaction" key={transaction.id}>
                                <div className="transaction-amount">
                                    <span className={transaction.amount > 0 ? "amount-debit" : "amount-credit"}>
                                        &euro; {transaction.amount}
                                    </span>
                                </div>
                                <div className="transaction-description">{transaction.description}</div>
                                <div className="transaction-date">{dateConvertor(transaction.dateTime)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
      }


}

export default Transactions;
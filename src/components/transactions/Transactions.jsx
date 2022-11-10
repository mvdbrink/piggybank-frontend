import { useState, useEffect } from "react";
import { getUserId } from "../../authentication";

import './Transactions.css'

function Transactions(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

  fetch(`http://localhost:8080/api/v1/accounts`, {
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-User-Id": getUserId()
      },
  })
  .then(res => res.json())
  .then(results => {
    const currentAccountId = results.accounts[0].id;

    var fetchUrl = `http://localhost:8080/api/v1/transactions/${currentAccountId}`;

    if (props.limit) {
      fetchUrl = fetchUrl + `?limit=${props.limit}`;
    }

    fetch(fetchUrl)
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
  });
  }, [props])



  const convertDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString('nl-NL', {
      day: '2-digit',
      month: 'short',
      year: '2-digit',
    });
  }


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
          <div>
            {transactions.map(transaction => (
              <div className="transaction" key={transaction.id}>
                <div className="transaction-date">{convertDate(transaction.dateTime)}</div>
                <div className="transaction-description">{transaction.description}</div>
                <div className="transaction-amount">
                  <span className={transaction.amount > 0 ? 'amount amount-debit' : ' amount amount-credit'}>
                    &euro; {transaction.amount}
                  </span>
                </div>
              </div>
            ))}

          </div>
      </div>
    );
  }


}

export default Transactions;
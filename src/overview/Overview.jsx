import './Overview.css'

function Overview() {
    return (
        <div>
            <h1>Welkom, Henk &#128075;</h1>

            <div className="container">
                <h2>Huidige saldo</h2>
                <span className="amount-highlight">&euro; 1.000,15,-</span>
            </div>

            <div className='container'>
                <h2>Laatste transacties</h2>

                <div className="transaction">
                    <div className="transaction-amount">
                        <span className='amount-debit'>
                            &euro; 41,57,-
                        </span>
                    </div>
                    <div className="transaction-description">Taxi ritje</div>
                    <div className="transaction-date">25 aug '22</div>
                </div>
                <div className="transaction">
                    <div className="transaction-amount">
                        <span className='amount-debit'>
                            &euro; 41,57,-
                        </span>
                    </div>
                    <div className="transaction-description">Taxi ritje</div>
                    <div className="transaction-date">25 aug '22</div>
                </div>
                <div className="transaction">
                    <div className="transaction-amount">
                        <span className='amount-debit'>
                            &euro; 41,57,-
                        </span>
                    </div>
                    <div className="transaction-description">Taxi ritje</div>
                    <div className="transaction-date">25 aug '22</div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
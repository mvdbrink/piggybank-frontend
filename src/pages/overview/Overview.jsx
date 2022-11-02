import Transactions from "../../components/transactions/Transactions";
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
                <h2>Laatste 3 transacties</h2>
                <Transactions title={'Laatste transacties'} limit={3} />
            </div>
        </div>
    );
}

export default Overview;
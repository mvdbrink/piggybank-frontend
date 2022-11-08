import Accounts from "../../components/accounts/Accounts";
import Transactions from "../../components/transactions/Transactions";
import './Overview.css'

function Overview() {
    return (
        <div>
            <h1>Welkom &#128075;</h1>

            <div className="container">
            <h2>Jouw account</h2>
                <Accounts />
            </div>

            <div className='container'>
                <h2>Laatste 3 transacties</h2>
                <Transactions title={'Laatste transacties'} limit={3} />
            </div>
        </div>
    );
}

export default Overview;
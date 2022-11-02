import Transactions from "../../components/transactions/Transactions";

function TransactionOverview () {

    return (
    <div>
        <h1>Transactie overzicht</h1>   
        <div className="container">
            <Transactions />
        </div>    
    </div>
    );
}

export default TransactionOverview;
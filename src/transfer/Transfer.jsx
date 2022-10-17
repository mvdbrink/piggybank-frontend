import { useState } from "react";
import { NavLink } from "react-router-dom";
import Alert from "../components/alert/Alert";
import "./Transfer.css"

function Transfer() {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [fromAccount, setFromAccount] = useState('1');
    const [toAccount, setToAccount] = useState('');
    const [currency, setCurrency] = useState('EUR');
    const [fundsTransfered, setFundsTransfered] = useState(false);

    const submitForm = (e) => {
        // Make sure page does not refresh.
        e.preventDefault();

        const form = { amount, description, fromAccount, toAccount };
        console.log('send form' + JSON.stringify(form));
        setFundsTransfered(true);
    }

    const resetState = () => {
        setFundsTransfered(false);
        setToAccount('');
        setFromAccount('1');
        setDescription('');
        setAmount('');
        setCurrency('EUR');
    }

    // render
    if (fundsTransfered) {
        return (
            <>
                <h1>Gelukt!</h1>
                <Alert message={<>Het is gelukt om &euro; {amount} over te maken!</>}></Alert>
                <NavLink to="/transfer" onClick={resetState}>Nog een overboeking</NavLink>
            </>
        );
    }
    return (
        <>
            <h1>Overboeken</h1>
            <form onSubmit={submitForm}>

                {/* From Account */}
                <div className="form-row">
                    <label>
                        Van rekening
                        <select name="account"
                            value={fromAccount}
                            onChange={(e) => setFromAccount(e.target.value)}>
                            <option value="1">Kenny Broeks  - &euro; 100,00 </option>
                        </select>
                    </label>
                </div>

                {/* To Account */}
                <div className="form-row">
                    <label>
                        Naar rekening
                        <select
                            required
                            name="toaccount"
                            value={toAccount}
                            onChange={(e) => setToAccount(e.target.value)}>

                            <option value="" disabled>Kies een ontvanger</option>

                            <optgroup label="Eigen rekeningen">
                                <option value="2">Kenny Broeks 2 - &euro; 1000.00</option>
                            </optgroup>

                            <optgroup label="Adresboek">
                                <option value="3">Bauke Ravestein</option>
                                <option value="4">Cem Fuijk</option>
                            </optgroup>

                        </select>
                    </label>
                </div>

                {/* Amount */}
                <div className="form-row">
                    <div style={{ position: "relative" }}>
                        <label className="amount-input-label">
                            Bedrag
                            <div>
                            <select
                                style={{ width: '50px', paddingRight: 0, display: 'inline-block' }}
                                required
                                name="currency"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}>

                                <option value="EURO">&euro;</option>
                                <option value="DOLLAR">&#36;</option>
                                <option value="POUND">&#163;</option>
                            </select>
                            <input
                            style={{display: 'inline-block'}}
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                type="text"
                                name="amount"
                                className="amount-input"
                                placeholder=""
                                required />
                                </div>
                        </label>

                    </div>
                </div>

                {/* Description */}
                <div className="form-row">
                    <label>Omschrijving
                        <textarea
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}>
                        </textarea>
                    </label>
                </div>

                {/* Submit form */}
                <div className="form-row">
                    <button type="submit">Overboeken</button>
                </div>
            </form>
        </>);
}

export default Transfer;
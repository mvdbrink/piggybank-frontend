import './Settings.css';
import { useState, useEffect } from 'react';

function Settings() {

    const [accountName, setAccountName] = useState('');
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/accounts`)
            .then(res => res.json())
            .then(
                (result) => {
                    setAccounts(result.accounts);
                    
                    // No support for multiple accounts, so always return the first in the list.
                    setAccountName(result.accounts[0].name)
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    const submitForm = (e) => {
        // Make sure page does not refresh.
        e.preventDefault();

        console.log(`Update ${accounts[0].id} with name ${accountName}`);
    }

    return (
        <div className='settings'>
            <h2>Account instellingen</h2>
            <div className='container'>
                <h3>Rekening naam aanpassen</h3>
                <form onSubmit={submitForm}>
                    <div className="form-row">
                        <div>
                            <label htmlFor="accountName" className="account-name-label">
                                Account naam
                                <div>
                                    <input
                                        value={accountName}
                                        onChange={(e) => setAccountName(e.target.value)}
                                        type="text"
                                        name="accountName"
                                        id="accountName"
                                        className="accountName-input"
                                        placeholder=""
                                        required />
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Submit form */}
                    <div className="form-row">
                        <button type="submit">Opslaan</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Settings;
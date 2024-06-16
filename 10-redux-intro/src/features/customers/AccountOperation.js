import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../accounts/accountSlice";

function AccountOperation() {
  const [depositAmt, setDepositAmt] = useState("");
  const [widthdrawAmt, setWidthdrawAmt] = useState("");
  const [loanAmt, setLoanAmt] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("INR");

  // dispatch actions
  const dispatch = useDispatch();
  // get state info
  const { balance, isLoading } = useSelector((store) => store.account);

  function handleDeposit() {
    dispatch(deposit(depositAmt, currency));
    // reset the state
    setDepositAmt("");
  }

  function handleWithdrawl() {
    dispatch(withdraw(widthdrawAmt));
    // reset the state
    setWidthdrawAmt("");
  }

  return (
    <div>
      <h1>Account Operations</h1>
      <h3>Account balance: {balance}</h3>
      <label>Deposit</label>
      <input
        type="number"
        value={depositAmt}
        onChange={(e) => setDepositAmt(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="THB">THB</option>
      </select>
      <button
        onClick={handleDeposit}
        disabled={isLoading}
      >{`DEPOSIT ${depositAmt}`}</button>
      <br />
      <br />
      <label>Withdraw</label>
      <input
        type="number"
        value={widthdrawAmt}
        onChange={(e) => setWidthdrawAmt(e.target.value)}
      />
      <button onClick={handleWithdrawl}>{`WITHDRAW ${widthdrawAmt}`}</button>
      <br />
      <br />
      <label>Request Loan</label>
      <input
        type="number"
        placeholder="Loan Amount"
        value={loanAmt}
        onChange={(e) => setLoanAmt(e.target.value)}
      />
      <input
        type="text"
        placeholder="Loan Purpose"
        value={loanPurpose}
        onChange={(e) => setLoanPurpose(e.target.value)}
      />
      <button>REQUEST LOAN</button>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default AccountOperation;

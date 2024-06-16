import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [adhaarNo, setadhaarNo] = useState("");

  const dispatch = useDispatch();

  function handleCreateCustomer() {
    if (!fullName || !adhaarNo) return;
    dispatch(createCustomer(fullName, adhaarNo));
  }

  return (
    <div>
      <h1>Create Customer</h1>
      <label>Customer Full Name</label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <br />
      <br />
      <label>Adhaar No.</label>
      <input
        type="number"
        value={adhaarNo}
        onChange={(e) => setadhaarNo(e.target.value)}
      />
      <br />
      <br />
      <input
        type="submit"
        value="Create New Customer"
        onClick={handleCreateCustomer}
      />

      <hr />
    </div>
  );
}

export default CreateCustomer;

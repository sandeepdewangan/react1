import "./App.css";
import AccountOperation from "./features/customers/AccountOperation";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";

function App() {
  return (
    <div className="App">
      <CreateCustomer />
      <Customer />
      <AccountOperation />
    </div>
  );
}

export default App;

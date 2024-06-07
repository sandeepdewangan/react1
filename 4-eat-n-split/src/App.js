import { useState } from "react";
import "./App.css";
import Friend from "./components/Friend";

function App() {
  const [isAddFriend, setIsAddFriend] = useState(false);
  const [friendList, addToFriendList] = useState([]);
  const [splitBillWith, addSplitBillWith] = useState([]);

  function addSplitBillWithIntoSelect(name) {
    addSplitBillWith([...splitBillWith, name]);
  }

  function addFriendFormHandle() {
    setIsAddFriend(true);
  }

  function handleAddFriendSubmit(e) {
    e.preventDefault();
    //console.log(e.target[0].value);
    if (e.target[0].value === "") return;
    // add to friend list
    const rand = Math.random() * 100;
    let friend = {
      name: e.target[0].value,
      description: "Koi udhaar nahi hai filhal",
      imageURL: `https://picsum.photos/seed/${rand}/100`,
    };
    addToFriendList((curr) => [...curr, friend]);
    e.target[0].value = "";
    setIsAddFriend(false);
  }

  function splitBillHandle(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    console.log(e.target.length);

    const payer = e.target[e.target.length - 2].value;
    addToFriendList((items) =>
      items.map(function (fr) {
        if (fr.name === payer) fr.description = "Bada Admi, Sabka Pay Kiya.";
        return fr;
      })
    );
    // friendList.map(function (fr) {
    //   if (fr.name === payer) fr.description = "Bada Admi, Sabka Pay Kiya.";
    //   return fr;
    // });
  }

  return (
    <div className="App">
      <div className="friends-area">
        {friendList.map((f) => (
          <Friend
            key={f.name}
            name={f.name}
            description={f.description}
            imageURL={f.imageURL}
            addSplitBillWithIntoSelect={addSplitBillWithIntoSelect}
          />
        ))}
        <button className="add-button" onClick={addFriendFormHandle}>
          Add Friend
        </button>
        {isAddFriend && (
          <form onSubmit={handleAddFriendSubmit}>
            <input type="text" />
            <button>Add</button>
          </form>
        )}
      </div>
      <div className="bill-area">
        <form onSubmit={splitBillHandle}>
          <h2>SPLIT BILL WITH</h2>
          <div className="form">
            <h4 className="h4-head">Total Expense</h4>
            <input type="number" name="total" />
          </div>
          <div className="form">
            {splitBillWith.map((name) => (
              <>
                <h4 className="h4-head">{name} Expense</h4>
                <input type="number" name={name} />
              </>
            ))}
          </div>
          <div className="form">
            <h4 className="h4-head">Who is paying the bill?</h4>
            <select>
              {splitBillWith.map((name) => (
                <option value={name}>{name}</option>
              ))}
            </select>
          </div>
          <button className="split-button">Split Bill</button>
        </form>
      </div>
    </div>
  );
}

export default App;

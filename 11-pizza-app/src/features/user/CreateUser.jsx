import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispath = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispath(updateName(username));

    // navigate to menu
    navigate("/menu");
  }
  return (
    <div className="mt-5">
      <p className="text-sm md:text-base">
        👏🏼 Welcome, Please enter your name.
      </p>
      <input
        type="text"
        placeholder="Full Name"
        className="h-10 text-sm w-52"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="text-sm" onClick={handleSubmit}>
        Order Now!
      </button>
    </div>
  );
}

export default CreateUser;

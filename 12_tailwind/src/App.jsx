import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {/* Loader */}
      {loading ? (
        <div
          role="status"
          className="absolute inset-0 flex items-center justify-center bg-slate-600/30 backdrop-blur-sm"
        >
          <Loader />
        </div>
      ) : (
        <></>
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-orange-300 border-b border-stone-200">
        <p className="text-xl font-bold tracking-widest uppercase">
          Pizza and Pizza Co. Raipur
        </p>
        <input
          type="text"
          placeholder="Enter order #"
          className="w-32 px-4 py-2 text-sm transition-all duration-300 bg-orange-100 rounded-full placeholder:text-stone-800 focus:w-72"
        />
        <p className="hidden text-base md:block">Welcome, Sandeep</p>
      </div>

      {/* Main Content  */}
      <div className="my-8 overflow-scroll text-xl text-center sm:my-16">
        <div className="mb-8 font-semibold md:text-3xl font-myFont">
          <p>The Best Pizza!!! 🍕</p>
          <p className="text-yellow-500">Straight out of the kitchen</p>
        </div>
        <div>
          <p className="mb-2">🗣 Please start by telling your name!</p>
          <input type="text" placeholder="Your Name" className="w-72" />
        </div>
        <div>
          <a
            href=""
            className="text-lg font-semibold text-orange-500 hover:text-orange-700"
          >
            Lets Start
          </a>
          <div className="mt-6">
            <button
              onClick={() => setLoading(true)}
              className="px-3 py-2 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-700 hover:bg-yellow-300"
            >
              📲 Call Us Now
            </button>
          </div>
        </div>
        {/* Form */}
        <div className="my-5 mt-8 space-y-4">
          <div className="space-x-3">
            <label>Full Name</label>
            <input type="text" className="input" />
          </div>
          <div className="space-x-3">
            <label>Mobile</label>
            <input type="text" className="input" />
          </div>
          <div className="space-x-3">
            <label>Address</label>
            <input type="text" className="input" />
          </div>
          <Button>Submit</Button>
        </div>
      </div>
      {/* Footer */}
      <div className="flex justify-between p-4 text-lg font-semibold uppercase bg-stone-900 text-stone-200">
        <p className="space-x-6">
          <span>Cart has 2 Pizza's.</span> <span>Rs. 255</span>{" "}
        </p>
        <p>ORDER NOW!</p>
      </div>
    </div>
  );
}

export default App;

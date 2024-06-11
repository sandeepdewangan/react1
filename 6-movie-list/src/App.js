import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [query, setQuery] = useState("");

  // useEffect calls only once on component mount.
  // useEffect(function () {
  //   fetch("http://www.omdbapi.com/?apikey=541ff05e&s=matrix")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.Search));
  // }, []);
  // [] effect clean up.

  // When given in [], the props will change react will re execute the useEffect again.

  useEffect(
    function () {
      // for cancelling API request
      const controller = new AbortController();
      async function fetchData() {
        try {
          if (query === "") {
            setData([]);
            throw new Error("Please search for a movie!");
          }

          setIsLoading(true);
          setErrorMsg("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=541ff05e&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) {
            setIsError(true);
            throw new Error("Something went wrong!");
          }
          const data = await res.json();
          if (data.Response === "False") {
            setIsError(true);
            throw new Error(data.Error);
          }

          setData(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            setIsError(true);
            setErrorMsg(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      fetchData();
      // clean up function
      // Every after each re-render cleanup function called.
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  useEffect(function () {
    function callback(e) {
      if (e.code === "Escape") {
        onHandleClose();
      }
    }
    document.addEventListener("keydown", callback);

    // clean up
    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, []);

  function onHandleClose() {
    console.log("Closing...");
  }

  function handleSearch(e) {
    setQuery((q) => e.target.value);
  }

  return (
    <div className="App">
      <h1>Data Fetching</h1>
      <input type="text" value={query} onChange={handleSearch} />
      <div style={{ backgroundColor: "green", color: "white", width: "200px" }}>
        {isError && <h2>{errorMsg}</h2>}
        {isLoading ? <h1>Loading...</h1> : data.map((d) => <h3>{d.Title}</h3>)}
      </div>
    </div>
  );
}

export default App;

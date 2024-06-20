import { useNavigate } from "react-router-dom";

function SearchOrder() {
  //   const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target[0].value;
    if (!query) return;
    navigate(`/order/${query}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search for a order" className="h-6 pl-1" />
      </form>
    </div>
  );
}

export default SearchOrder;

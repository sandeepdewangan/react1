import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      {error.data || error.message}
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default Error;

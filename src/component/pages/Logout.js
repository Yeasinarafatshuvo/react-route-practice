import { useLocation } from "react-router-dom";

const Logout = () => {
  let location = useLocation();
  return (
    <div>
      <h1>Logout Page</h1>
      <h1>{location.state.name}</h1>
    </div>
  );
};

export default Logout;

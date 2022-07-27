import { useLocation } from "react-router-dom";

const Login = () => {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Login Page</h1>
      <h1>{location.state.st}</h1>
    </div>
  );
};

export default Login;

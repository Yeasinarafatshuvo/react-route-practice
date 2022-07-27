import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  let data = {
    name: "yeasin",
  };
  return (
    <div>
      <h1>Dashboard page</h1>
      <button
        onClick={() => {
          navigate("/logout", { state: data });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

import { useEffect } from "react";
import "./App.css";
import Users from "./components/Users.jsx";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/features/users/usersSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;

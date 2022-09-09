import "./App.css";
import Counter from "./Counter/Counter";
import Auth from "./Auth/Auth";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import { useSelector } from "react-redux";
function App() {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div className="App">
      {isAuth && <Header />}
      {!isAuth && <Auth />}
      {isAuth && <Profile />}
      <Counter />
    </div>
  );
}

export default App;

import PublicRoutes from "./components/PublicRoutes";
import Router from "./Router";
import UserHook from "./components/UserHook";


const App = () => {
  const { user } = UserHook();

  return (<div>{user ? <Router /> : <PublicRoutes />}</div>)
};

export default App;

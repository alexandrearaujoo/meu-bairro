import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Search from "../pages/Search";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import BusinessPage from "../pages/BusinessPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"> 
        <Home />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/search">
        <Search /> 
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/businesspage">
        <BusinessPage />
      </Route>
    </Switch>
  );
};

export default Routes;

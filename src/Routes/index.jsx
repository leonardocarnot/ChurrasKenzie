import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";
import { EventsPage } from "../Pages/Events";
import DashboardBbc from "../Pages/DashboardBbc";
import { Home } from "../Pages/Home";
import { AboutUs } from "../Pages/AboutUs";
import { useContext } from "react";
import { UserContext } from "../Providers/User";
import { TokenContext } from "../Providers/Token";


export const Routes = () => {

  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dashboardBbc">
        {token && user.category === "Churrasqueiro" ? (
          <DashboardBbc />
        ) : (
          <Redirect to="/"/>
        )}
      </Route>
      <Route exact path="/aboutUs">
        <AboutUs/>
      </Route>
      <Route exact path="/login">
      {token ? (
          <Redirect to="/"/>
        ) : (
          <LoginPage />
        )}
      </Route>
      <Route exact path="/register">
      {token ? (
          <Redirect to="/"/>
        ) : (
          <RegisterPage />
        )}
      </Route>
      <Route exact path="/events">
      {token && user.category === "Consumidor" ? (
          <EventsPage />
        ) : (
          <Redirect to="/"/>
        )}
      </Route>
    </Switch>
  );
};

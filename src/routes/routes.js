import { Route, Switch } from "react-router-dom";
import Box from "../components/box";
import Dashboard from "../pages/dashboard";
import { Login } from "../pages/login";
const Router = () => {
    return(
            <Switch>
                <Route exact path="/"  component={Login} />
                <Route path="/dashboard"  component={Dashboard} />
            </Switch>
    );
}

export default Router;
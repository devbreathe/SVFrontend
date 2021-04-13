import {Route, Switch} from "react-router-dom";
import Box from "../components/box";
export const RouterDashboard = () => {
    return(
        <Switch>
            <Route exact path="/dashboard" component={Box} />
        </Switch>
        
    );
}
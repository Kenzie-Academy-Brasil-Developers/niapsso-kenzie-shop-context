import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div>home</div>
      </Route>
      <Route path="/cart">
        <div>cart</div>
      </Route>
    </Switch>
  );
};

export default Routes;

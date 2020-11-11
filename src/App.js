import "./App.scss";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/reduxStore";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import List from "./components/List";
import Item from "./components/Item";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" render={() => <Login />} />
            <Route exact path="/list" render={() => <List />} />
            <Route path="/list/:filmId" render={() => <Item />} />
            <Route path="*" render={() => <div>404 not found</div>} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

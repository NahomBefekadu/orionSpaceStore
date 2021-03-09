import "./App.css";
import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>", authUser);
      if (authUser) {
        //the user just logged in/ was just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

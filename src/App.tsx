import { Route, Router, Switch } from "wouter";
import Home from "./pages/home/Home";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useState } from "react";

function App() {
  const [formLogin, setFormLogin] = useState({
    username: "claudio.dcv",
    password: "1234qwer",
  });

  const handleFormSubmit = (form: { username: string; password: string }) => {
    setFormLogin(form);
  };

  console.log(formLogin);
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/">
          <Home formLogin={formLogin} />
        </Route>
        <Route path="/login">
          <Login handleFormSubmit={handleFormSubmit} />
        </Route>
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;

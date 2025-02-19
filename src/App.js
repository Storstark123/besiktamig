import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Welcome to the Home Page</h1>
        </Route>
        <Route path="/about">
          <h1>About Page</h1>
        </Route>
      </Switch>
    </Router>
  );
}
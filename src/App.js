import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/Protected.route';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

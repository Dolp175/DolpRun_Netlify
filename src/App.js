import './App.scss';
import { Menu } from './components/Menu';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import ProtectedRoute from './ProtectedRoute';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/home" component={Home} />
          <Redirect to="/"  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

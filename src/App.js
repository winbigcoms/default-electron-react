import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './Page/Login';
import MainPage from './Page/MainPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/main" exact component={MainPage}/>
          <Route path="/" exact component={LoginPage}/>
        </Switch>      
      </HashRouter>
    </div>
  );
}

export default App;

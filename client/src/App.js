import './App.css';
import Header from './components/Header';
import Scorecard from './components/Scorecard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
				<Header />

				<Switch>
					<Route exact path="/" component={Scorecard} />
				</Switch>
			</Router>
    </div>
  );
}

export default App;

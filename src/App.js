import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CreateProfile from './Components/create-profile'
import RCSurvey from './Components/rc-survey'



class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Router>
          <div className="component-container">
            <Switch>
              <Route exact path="/create-profile" component={CreateProfile} />
              <Route exact path="/rc-survey" component={RCSurvey} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

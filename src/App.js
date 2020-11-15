import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CreateProfile from './Components/create-profile'
import RCSurvey from './Components/rc-survey'
import ScrollToTop from './Components/scroll-to-top'



class App extends React.Component {

  render(){
    return (
      <div className="App">
        <div id="mobile-view-container">
          <Router>
            <ScrollToTop/>
            <div className="component-container">
              <Switch>
                <Route exact path="/create-profile" component={CreateProfile} />
                <Route exact path="/rc-survey" component={RCSurvey} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CreateProfile from './Components/create-profile'
import RCSurvey from './Components/rc-survey'
import ScrollToTop from './Components/scroll-to-top'
import ProfileFeed from "./Components/ProfileFeed"
import SummaryCreateProfile from './Components/summary-create-profile'
import UserSettings from './Components/user-settings'
import GroupSettings from './Components/group-settings'
import SSO from './Components/sso'



class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Router>
          <ScrollToTop/>
          <div className="component-container">
            <Switch>
              <Route exact path="/create-profile" component={CreateProfile} />
              <Route exact path="/rc-survey" component={RCSurvey} />
              <Route exact path="/summary-create-profile" component={SummaryCreateProfile} />
              <Route exact path="/profile-feed" component={ProfileFeed} />
              <Route exact path="/user-settings" component={UserSettings} />
              <Route exact path="/group-settings" component={GroupSettings} />
              <Route exact path="/sso" component={SSO}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

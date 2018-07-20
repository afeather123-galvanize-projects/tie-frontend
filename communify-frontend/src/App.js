import React, { Component } from 'react';
import './App.css';
import {Login} from './components/login/LoginContainer'
import {Navigation} from './components/Navigation/NavigationContainer'
import {Route, Switch, Redirect} from 'react-router-dom'
import CheckAuth from './components/CheckAuth'
import EventPage from './components/EventPage/EventPage';
import GroupPage from './components/GroupPage/GroupPage'
import SingleGroup from './components/SingleGroup/SingleGroup'
import SingleEvent from './components/SingleEvent'
import CheckLogin from './components/CheckLogin'
import PageRedirect from './components/PageRedirect'
import InvitesPage from './components/InvitesPage'
import MessageClearer from './components/MessageClearer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/" component={Navigation} />
        <Route path="/" component={PageRedirect} />
        <Route path="/" component={MessageClearer}/>
        <MessageClearer />
        <Switch>
          <Route exact path="/" component={CheckLogin(Login)} />
          <Route exact path="/events" component={CheckAuth(EventPage)}/>
          <Route exact path="/events/:id" component={CheckAuth(SingleEvent)}/>
          <Route exact path="/groups" component={CheckAuth(GroupPage)} />
          <Route exact path="/groups/:id" component={CheckAuth(SingleGroup)} />
          <Route exact path="/invites" component={CheckAuth(InvitesPage)} />
        </Switch>
      </div>
    );
  }
}

export default App;

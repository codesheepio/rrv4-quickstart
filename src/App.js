import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Redirect, Switch } from 'react-router-dom'
import './styles.css'
const TopicList = props => <h1>TopicList</h1>
const TopicDetail = ({ match }) =>
  <h1>
    Topic id: {match.params.id}
  </h1>
const NotFound = () => <h1>404 - Page not found</h1>
const App = () =>
  <div>
    <h1>React router quickstart</h1>
    <Link to="/topics">Topic List</Link>
    <Link to="/topics/1">Topic Detail</Link>
    <Link to="/notfound">Not found</Link>
    <Switch>
      <Redirect exact from="/" to="/topics" />
      <Route path="/topics/:id" component={TopicDetail} />
      <Route exact path="/topics" component={TopicList} />
      <Route component={NotFound} />
    </Switch>
  </div>

export default App

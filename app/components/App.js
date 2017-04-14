import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Battle from './Battle';
import Home from './Home';
import Nav from './Nav';
import Popular from './Popular';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/battle' component={ Battle } />
            <Route path='/popular' component={ Popular } />
            <Route render={() => {
              return <p>Not found!</p>;
             }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

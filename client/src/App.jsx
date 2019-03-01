import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getMentors } from './api/mentors';
import Home from './components/Home';

class App extends Component {
  componentDidMount() {
    getMentors().then((modules) => {
      console.log(modules);
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:path(|index|home|start)" component={Home} />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

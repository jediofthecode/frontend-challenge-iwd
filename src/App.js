import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// import our components and scenes
import Header from 'components/Header';
import Home from 'scenes/Home';
import Survey from 'scenes/Survey';

// this is just a container component for the primary App, this will generally do nothing but render the 
// rest of the application and any root components

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        { /* Here we will include the router, generall in an app that grows
        larger we will re-factor this out into it's own file. I have included a router.js file
        to demonstrate how to handle this */ }
        <Switch>
          <Route path="/survey/:name/:code">
            <Survey />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import UserList from './components/UserList';
import SingleUser from './components/SingleUser';
import Home from './components/Home';
import Page404 from './components/Page404';

class App extends Component {
    render() {
        return (
          <div className="App">
            <Router>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/user-list" component={UserList}></Route>
                  <Route path="/user/:id" component={SingleUser}></Route>
                  <Route path="*" component={Page404}></Route>
              </Switch>
            </Router>
          </div>
        );
    }
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//     render() {
//         return (
//           <div className="App">
//             <div className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <h2>Welcome to React</h2>
//             </div>
//             <p className="App-intro">
//               To get started, edit <code>src/App.js</code> and save to reload.
//             </p>
//           </div>
//         );
//     }
// }

// export default App;



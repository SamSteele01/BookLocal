import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter, Router, Route, Switch, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

// Layouts
// import App from './containers/App';
import BaseLayout from './containers/BaseLayout'
import Home from './components/Home'
import Register from './containers/Register'
import Prospectus from './containers/Prospectus';
import './styles/index.css';

const history = createHistory();
const location = history.location;

ReactDOM.render((
      <Router history={history}>
          <BaseLayout>
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={Prospectus}/>
          </BaseLayout>
      </Router>
  ),
  document.getElementById('root')
);
registerServiceWorker();

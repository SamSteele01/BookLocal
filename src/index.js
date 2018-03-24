import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

// Layouts
// import App from './containers/App';
import BaseLayout from './containers/BaseLayout'
import Home from './components/Home'
import App from './containers/App'
import Prospectus from './containers/Prospectus';
import './styles/index.css';

const history = createHistory();
// const location = history.location;

ReactDOM.render((
      <Router history={history}>
          <BaseLayout>
            <Route path="/home" component={Home} />
            <Route path="/register" component={App} />
            <Route path="/about" component={Prospectus}/>
            <Route exact path="/" component={Home} />
          </BaseLayout>
      </Router>
  ),
  document.getElementById('root')
);
registerServiceWorker();

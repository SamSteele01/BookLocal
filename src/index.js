import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

// Layouts
// import App from 'containers/App';
import BaseLayout from 'wrappers/BaseLayout'
import RegisterMessage from 'components/RegisterMessage'
import Reserve from 'components/Reserve'
import Access from 'components/Access'
import Settle from 'components/Settle'
import Status from 'containers/Status'
import Contact from 'components/Contact'
import Prospectus from 'containers/Prospectus';
import './styles/index.css';

// const history = createHistory();
// const location = history.location;

ReactDOM.render((
      <BrowserRouter basename="/EthMemphis">
          <BaseLayout>
            <Route path="/home" component={RegisterMessage} />
            <Route path="/register" component={Reserve} />
            <Route path="/checkIn" component={Access} />
            <Route path="/checkOut" component={Settle} />
            <Route path="/status" component={Status} />
            <Route path="/about" component={Prospectus}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/" component={RegisterMessage} />
          </BaseLayout>
      </BrowserRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();

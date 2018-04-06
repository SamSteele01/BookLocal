import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

import App from 'containers/App';
import BaseLayout from 'wrappers/BaseLayout'
// import RegisterMessage from 'components/RegisterMessage'
// import Reserve from 'components/Reserve'
// import Access from 'components/Access'
// import Settle from 'components/Settle'
// import Status from 'containers/Status'
// import Contact from 'components/Contact'
// import Prospectus from 'containers/Prospectus';
import './styles/index.css';

// const history = createHistory();
// const location = history.location;

ReactDOM.render((
      <BrowserRouter >
      {/* // <Router history={history}> */}
          <BaseLayout>
             <Route path="/" component={App} />
             {/* <App/> */}
          </BaseLayout>
      {/* </Router> */}
      </BrowserRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();

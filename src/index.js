import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from 'components/App';
import BaseLayout from 'components/BaseLayout'

import './styles/index.css';

ReactDOM.render((
      <BrowserRouter basename="/EthMemphis">
          <BaseLayout>
             <Route path="/" component={App} />
          </BaseLayout>
      </BrowserRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();

// @flow
import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import Default from './default';
import Unmatched from './unmatched';
import Counter from './counter';


const App = (): React$Element<*> =>
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={Default} />
      <Match exactly pattern="/counter" component={Counter} />
      <Miss component={Unmatched} />
    </div>
  </BrowserRouter>;

export default App;

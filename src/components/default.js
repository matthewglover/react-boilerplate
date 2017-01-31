// @flow
import React from 'react';
import { Link } from 'react-router';

const Default = (): React$Element<*> =>
  <div>
    Default Component<br />
    <Link to="/counter">go to counter</Link>
  </div>;

export default Default;

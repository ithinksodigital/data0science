import { hot } from 'react-hot-loader';
import * as React from 'react';
import LaunchDetails from './view/LaunchDetails';
import { launch } from './assets/lunch';
import { launchSite } from './assets/launchSite';
import { rocket } from './assets/rocket';
import './styles/theme.sass';
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <LaunchDetails
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}
        />
      </main>
    );
  }
}

export default hot(module)(App);

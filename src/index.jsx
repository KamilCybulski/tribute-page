import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import './style.scss';

const root = document.getElementById('root');

render(
  <AppContainer>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </AppContainer>,
  root,
);

if (module.hot) module.hot.accept(App, () => render(App));

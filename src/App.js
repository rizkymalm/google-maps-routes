// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import { store } from './redux/store';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

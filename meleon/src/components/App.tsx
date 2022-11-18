import RootNavigationContainer from '@routes/containers/RootNavigationContainer';
import rootReducer from '@store/rootReducer';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import '../styles/core.css';
import { BrowserRouter, useLocation } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootNavigationContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

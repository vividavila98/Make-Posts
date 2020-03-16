import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/posts';
import Postform from './components/postform';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;

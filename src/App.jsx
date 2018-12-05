import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextInput from './components/TextInput';
import Parser from './components/Parser';
import Docs from './components/Docs';

const App = () => (
  <Provider store={store}>
    <div className="container mt-2 mb-2">
      <h1 style={{ fontSize: '1.5rem', textAlign: 'center' }}>fish data parser</h1>
      <h6>Input</h6>
      <TextInput />
      <h6>Output</h6>
      <div className="card container pt-2 pb-2">
        <Parser />
      </div>
      <div className="card container mt-3 pt-2">
        <Docs />
      </div>
      <small className="float-right text-right">
        Made in the mLab at Reed College in 2018.
        <br />
        Questions? Email&nbsp;
        <a href="mailto:fungj@reed.edu?subject=Fish data parser">fungj@reed.edu</a>
        .
        <br />
        🐟 🐠 🐡
      </small>
    </div>
  </Provider>
);

export default App;

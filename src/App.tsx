import 'reflect-metadata';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InjectorProvider } from './ioc/ioc';
import { container } from './App.ioc';

import { SomeOtherComponent } from './SomeOtherComponent';
import { AnotherComponent } from './AnotherComponent';

const App: React.FC = () => {
  return (
    <InjectorProvider container={container}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SomeOtherComponent />
        <AnotherComponent />
      </div>
    </InjectorProvider>
  );
};

export default App;

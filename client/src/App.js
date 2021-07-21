import React from 'react';
import './App.css';
import Addtodo from './components/Addtodo';
import Header from './components/header';
import Todos from './components/Todos';
import {Provider} from './context';

function App() {
  return (
    <div className="app-container">
       <Header />
     <div className="addlist">
       <Provider>
     <Addtodo/>
     <Todos/>
     </Provider>
     </div>
    </div>
  );
}

export default App;

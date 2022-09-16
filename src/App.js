import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './home';
import Sobre from './sobre';
import Usuario from './usuario';

function App() {
  return (
    <>
      <header>
        <Link to='/usuario'>Usuario</Link>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/home'>Home</Link>
      </header>

      <main>
        <Switch>
          <Route path='/usuario' component= {Usuario}/>
          <Route path='/sobre' component= {Sobre}/>
          <Route path='/home' component= {Home}/>
        </Switch>
      </main>
    </>
  );
}

export default App;

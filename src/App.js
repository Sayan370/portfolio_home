import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home/Home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
      
      <Home/>
   
</Route>
   
  
    
  


     
      <Route>
     <div>Not Found</div>

      </Route>



    </Switch>

  </BrowserRouter>
  );
}

export default App;

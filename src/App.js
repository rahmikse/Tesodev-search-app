 import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ResultPage from './components/ResultPage/ResultPage';

  
function App() {
  return (  /* Route op - Landing Page ve Result Page yönlendirme işlemleri */
    <>
     <Router> 
      <div > 
          <Switch>
          <Route  exact path="/" >
          <LandingPage/>
          </Route>
          <Route  exact path="/result-page" >
          <ResultPage/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
    
  );
}

export default App;

import styles from './App.module.css'
import './App.css';
import './normalize.css'

import { MovieDetails } from './pages/MovieDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { LandingPage } from './pages/LandingPage';


function App() {
  return (
      <>
      <Router>
        <header>
          <Link to="/"><h1 className={styles.title}>WEB PAGE</h1></Link>
        </header>
     
      
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails ></MovieDetails>
          </Route>
          
          <Route path="/">
            <LandingPage></LandingPage>  
          </Route>
        </Switch>
      </Router>
      </>

  );
}

export default App;

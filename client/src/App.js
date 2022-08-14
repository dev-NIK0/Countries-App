import './App.css';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DetailCountry from './components/DetailCountry'; 
import CreateActivity from './components/CreateActivity';

function App() {
  return (
      <Router>
          <Routes>
            <Route exact path = '/' element = {<LandingPage/>}/> 
            <Route exact path= '/home' element={<Home/>}/>
            <Route path= '/home/:id' element={<DetailCountry/>}/>
            <Route path= '/home/create-activity' element={<CreateActivity/>}/>
          </Routes>
      </Router>
  );
}

export default App;

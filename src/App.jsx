import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import pic from './assets/me.jpg'
//import viteLogo from '/vite.svg'
//import './App.css'
import  Navibar  from "./Navibar2"

import ChemsafePage from './ChemsafePage';
import GymPage from './GymPage';
import HomePage2 from './HomePage2';
import Sphere from './Sphere';
import RacingPage from './RacingPage';
import StudyPage from './StudyPage';
import ThesisPage from './ThesisPage';
import DataPage from './DataPage';

const App = () => {
  return (
    <>
     <Router>
      <div className="App">
        <div className='nav-header'>
          <Navibar />
        </div>
        <Routes>
          <Route path="/gym" element={<GymPage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route path="/home2" element={<HomePage2 />} />
          <Route path="/chemsafe" element={<ChemsafePage />} />
          <Route path="/sphere" element={<Sphere />} />
          <Route path="/wobracing" element={<RacingPage />} />
          <Route path="/homeoffice" element={<StudyPage />} />
          <Route path="/master" element={<ThesisPage />} />
          <Route path="/data" element={<DataPage />} />
        </Routes>
      </div>

    </Router>
      
      
    </>
  )
};

export default App;

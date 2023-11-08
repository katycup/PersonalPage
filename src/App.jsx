import React from 'react';
import { HashRouter as Router, Route,Routes} from 'react-router-dom';
import pic from './assets/me.jpg'
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
          <Route exact path="/gym" element={<GymPage />} />
          <Route exact path="/chemsafe" element={<ChemsafePage />} />
          <Route exact path="/sphere" element={<Sphere />} />
          <Route exact path="/wobracing" element={<RacingPage />} />
          <Route exact path="/homeoffice" element={<StudyPage />} />
          <Route exact path="/master" element={<ThesisPage />} />
          <Route exact path="/data" element={<DataPage />} />
          <Route exact path="/" element={<HomePage2 />} />
        </Routes>
      </div>
    </Router>
    </>
  )
};

export default App;

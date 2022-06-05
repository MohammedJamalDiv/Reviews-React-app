import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header.js';
import FeedbackData from './data/FeedbackData.js';
import Feedbacklist from './Components/feedbacklist.js';
import FeedBackItem from './Components/FeedbackItem.js';
import FeedBackStatus from './Components/feedBackStatus.js';
import Card from './Components/shared/Card.js';
import FeedbackForms from './Components/FeedbackForms.js';
import PageAbout from './Components/Pages/PageAbout.js';
import AboutIcon from './Components/AboutIcon.js';
import { FeedBackProvider } from './Context/FeedbackContext';
import FeedbackContext from './Context/FeedbackContext';
function App() {
  const [FeedData, SetFeedData] = useState(FeedbackData);

  return (
    <FeedBackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForms feedbackarr={FeedData} />
                  <FeedBackStatus />
                  <Feedbacklist />
                </>
              }
            ></Route>
            <Route path="/about" element={<PageAbout />} />
          </Routes>
        </div>
        <AboutIcon />
      </Router>
    </FeedBackProvider>
  );
}
export default App;

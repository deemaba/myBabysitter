import './App.css';
import { Navbar } from './Navbar/Navbar';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './AboutUs/About';
import { Home } from './Home/Home';
import { Contactus } from './ContactUs/Contactus';
import { Babysitter } from './Babysitter/Babysitter';
import Babysitterchat from './Babysitter/Babysitterchat';
import { Activites } from './ActivitiesForKids/Activites';
import { Signin } from './SignIn/SignInf';
import { navArr } from './Navbar/nav_items';
import { OferAJob } from './OferAJob/OferAJob';
import { SignUp } from './SignUp/SignUp';
import { FindBabySitter } from './FindBabySitter/FindBabySitter';
import { Profile } from './PostProfile/profile';
import { JobPanelAll } from './OferAJob/JobPanelAll';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          {/* <Navbar navItems={navArr} /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />

            <Route path="profile" element={< Profile />} />
            <Route path="babysitter" element={<Babysitter />} />
            <Route path="babysitterchat" element={<Babysitterchat />} />
            <Route path="activitiesForKids" element={<Activites />} />
            <Route path="findBabysitter" element={<FindBabySitter />} />
            <Route path="jobPanel" element={<JobPanelAll />} />
            <Route path="OferAJob" element={<OferAJob />} />
            <Route path="contact" element={<Contactus />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<Signin />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </header>
    </div>

  );

}


export default App;

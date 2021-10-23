import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Protfolio from "./components/protfolio/Protfolio";
import Resume from "./components/resume/Resume";
function App() {
  return (
    <div id='container'>
      <Router>
        <Nav/>
        <Intro/>
        <Switch>
          <Route exact path='/'>
            <Resume/>
          </Route>
          <Route exact path='/protfolio'>
            <Protfolio/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

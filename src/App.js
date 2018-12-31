import React, { Component } from "react";
import "./App.css";
// import * as adapter from "./Adapter.js";
// import HomePage from "./components/HomePage";
import Questionnaire from './components/Questionnaire'
import NationalCharts from './components/NationalCharts'
import UserStats from './components/UserStats'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import ukMap from './components/ukMap'
import api from './components/api'
import CategoryPage from './components/CategoryPage'
import CategoryGraphsPage from './components/CategoryGraphsPage'
import SpendingQuestionnaire from './components/SpendingQuestionnaire'
import SpendingQuestionnairePage from './components/SpendingQuestionnairePage'
import Footer from './components/Footer'
import { Route, Switch } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Questionnaire" component={Questionnaire} />
          <Route path="/NationalCharts" component={NationalCharts} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/SpendingQuestionnaire" component={SpendingQuestionnaire} />
          <Route path="/UserStats" component={UserStats} />
          <Route path="/UK" component={ukMap} />
          <Route path="/api" component={api} />
          <Route path="/categoryGraphs" component={CategoryGraphsPage} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/spending" component={SpendingQuestionnairePage} />
          <Route path="/" component={Homepage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;


// for error message. if (resp.error) rerender page with error message else redirect to next page
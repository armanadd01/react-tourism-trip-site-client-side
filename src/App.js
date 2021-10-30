import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';
import Plans from './Component/Home/Plans/Plans';
import Login from './Component/Shared/Login/Login';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import Home from './Component/Home/Home/Home';
import AddPlans from './Component/AddPlans/AddPlans';
import PlanDetails from './Component/PlanDetails/PlanDetails';
import PageNotfound from './Component/Shared/PageNotFound/PageNotfound';
import PrivateRoute from './Component/Shared/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {

  return (
    <div className="App">
      <AuthProvider>


      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/plans">
            <Plans></Plans>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addplans">
            <AddPlans></AddPlans>
          </Route>
          {/* Private Route */}
          <PrivateRoute path="/plans/:plansId">
              <PlanDetails></PlanDetails>
          </PrivateRoute>
          {/* <PrivateRoute path="/doctor/:doctorId">
              <DoctorDetails></DoctorDetails>
          </PrivateRoute> */}
          <Route exact path="*">
            <PageNotfound></PageNotfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

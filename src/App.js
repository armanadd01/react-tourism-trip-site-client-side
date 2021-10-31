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
import PageNotfound from './Component/Shared/PageNotFound/PageNotfound';
import PrivateRoute from './Component/Shared/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import MyOrders from './Component/MyOrders/MyOrders';
 import Orders from './Component/Orders/Orders';
import AdminDashboard from './Component/Admin/AdminDashboard/AdminDashboard';
import AllUsers from './Component/Admin/AllUsers/AllUsers';
//import AllOrders from './Component/Admin/AllOrders/AllOrders';
import AddUser from './Component/AddUser/AddUser';
import AddOrders from './Component/AddOrders/AddOrders';



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
          <Route path="/myorder/:email">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/allorders">
            <Orders></Orders>
          </Route>
          <Route path="/allusers">
            <AllUsers></AllUsers>
          </Route>
          <Route path="/adduser">
            <AddUser></AddUser>
          </Route>
          <PrivateRoute path="/addorder/:plansId">
            <AddOrders></AddOrders>
          </PrivateRoute>
          
          <Route exact path="/admindashboard">
            <AdminDashboard></AdminDashboard>
          </Route>
          
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

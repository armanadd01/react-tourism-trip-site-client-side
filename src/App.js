import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';
import Plans from './Component/Home/Plans/Plans';
import Login from './Component/Shared/Login/Login';
import Header from './Component/Shared/Header/Header';
import Footer from './Component/Shared/Footer/Footer';
import Home from './Component/Home/Home/Home';
import AddPlans from './Component/AddPlans/AddPlans';

function App() {
  console.log(process.env);
  return (
    <div className="App">
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
          {/* <PrivateRoute path="/service/:serviceId">
              <DepartmentDetails></DepartmentDetails>
          </PrivateRoute>
          <PrivateRoute path="/doctor/:doctorId">
              <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <Route exact path="*">
            <Page404></Page404>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

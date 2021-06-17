// Import Libraries and Tools From Node Modules
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./Firebase/firebase";
import { connect } from "react-redux";
import { setUser } from "./Redux/Actions/actions";
import PrivateRout from "./Firebase/PrivateRout";
// import Pages
import Login from "./Components/Login/Login";
import Sign_Up from "./Components/Sign Up/Sign_Up";
import Home from "./Components/Home/Home";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import About_Us from "./Components/ِAbout/About_Us";
import About_Academy from "./Components/ِAbout/About_Academy";
import Fields_Page from "./Components/Fields/Fields";
import Contact from "./Components/Contact/Contact";
import Courses from "./Components/Courses/Courses";
import Add_Course from "./Components/Courses/Add_Course";
import Loader from "./Components/Loader/Loader";
import Field_Courses from './Components/Fields/Field_Courses'


function App(props) {
  // State


  // Component Life Circal
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      props.setUser(user);
    });
    return unsubscribe;
  }, []);


  // Return App Component
  return (
    <>
      <Router>
        <Route component={Loader} path="/" />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/getpassword" component={ForgetPassword} />
          <Route path="/signup" component={Sign_Up} />
          <PrivateRout path="/about-us" component={About_Us} />
          <PrivateRout path="/about-academy" component={About_Academy} />
          <PrivateRout path="/fields" component={Fields_Page} />
          <PrivateRout path="/courses" component={Courses} />
          <PrivateRout path="/add-course" component={Add_Course} />
          <PrivateRout path="/contact" component={Contact} />
          <PrivateRout path="/:field" component={Field_Courses} />
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </>
  );

  // Redux
}
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user))
  };
};

export default connect("", mapDispatchToProps)(App);

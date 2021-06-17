// Import Libraries and Tools From Node Modules
import { connect } from "react-redux";
import { useEffect } from "react";
import { Route } from "react-router-dom";
// Import Component
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import ScrollToTop from "./ScrollToTop";
import Video_section from "./Video_section/Video_section";
import List_of_benefits from "./List_of_benefits/List_of_benefits";
import Stats from "./Stats/Stats";
import Fields from "./Fields/Fields";
import Footer from "../Footer/Footer";

// import style
import "./style.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 700);
    document.title = "أكاديمية تعلّم ذاتياً | الرئيسية";
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Landing />
      <Video_section />
      <List_of_benefits />
      <Stats />
      <Fields />
      <Footer />
    </>
  );
};

// Redux
const mapStateToProps = (state) => {
  return {
    loding: state.loding,
  };
};
export default connect(mapStateToProps)(Home);

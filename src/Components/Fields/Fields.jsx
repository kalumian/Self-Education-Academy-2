import Footer from "../Footer/Footer";
import Fields from "../Home/Fields/Fields";
import Header from "../Home/Header/Header";
import Landing from "../Home/Landing/Landing";
import { useEffect } from "react";
const Fields_Page = () => {
  useEffect(() => {
    window.scrollTo(0, 600);
    document.title = "أكاديمية تعلّم ذاتياً | قائمة المجالات";
  });
  return (
    <>
      <Header />
      <Landing />
      <Fields />
      <Footer />
    </>
  );
};
export default Fields_Page;

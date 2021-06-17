import logo from "../../Images/logodec.jpg";
import Header from "../Home/Header/Header";

import { useEffect } from "react";
import Footer from "../Footer/Footer";
import "./style.css";
import { Link } from "react-router-dom";
import Landing from "../Home/Landing/Landing";
const About_Us = () => {
  useEffect(() => {
    window.scrollTo(0, 600);
    document.title = "أكاديمية تعلّم ذاتياً | مَن نَحن";
  });

  return (
    <>
      <Header />
      <Landing />
      <div className="about">
        <div className="container">
          <h1 className="title">نبذة عنا</h1>
          <p>
            اسمي محمد كالو, مطوّر واجهات المستخدم ومهتم بالبرمجة بشكل عام متقن
            لرياكت جي اس, اعمل حالياً بشكل تطوّعي على العديد من المشاريع الصغيرة
            والمتوسطة وأهدف لنشر العلم والمعرفة سواء كانت داخل إطار البرمجة او
            خارجها فأنا اؤمن بأن كل فرد في المجتمع يملك طاقة كبيرة بداخله ...
            وهدفي الاسمى إخراج تحريرها .. وهذا ما أعمل عليه
            <br />
            <br /> لا تتردد عند رغبتك بالتواصل معي لأي امرٍ كان ...
            <Link> قنوات التواصل</Link>
          </p>
          <div className="links text-center">
            <Link className="mx-2 btn btn-outline-primary mt-5" to="/">
              الرئيسية
            </Link>
            <Link
              className="mx-2 btn btn-outline-primary mt-5"
              to="/about-academy"
            >
              عن الأكاديمية
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About_Us;

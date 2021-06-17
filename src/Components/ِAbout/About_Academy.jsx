import logo from "../../Images/logodec.jpg";
import Header from "../Home/Header/Header";

import { useEffect } from "react";
import Footer from "../Footer/Footer";
import "./style.css";
import { Link } from "react-router-dom";
import Landing from "../Home/Landing/Landing";
const About_Academy = () => {
  useEffect(() => {
    window.scrollTo(0, 700);
    document.title = "أكاديمية تعلّم ذاتياً | عن الاكاديمية";
  });

  return (
    <>
      <Header />
      <Landing />
      <div className="about">
        <div className="container">
          <h1 className="title">عن الأكاديمية</h1>
          <p>
            أكاديمية التعليم الذاتي الإفتراضية, اكاديمية تعنى بجمع عشرات
            المجالات التعليمية وتقديمها لمن يطلب العلم بشكل مجاني, ومن اهم اهداف
            الأكاديمية هي نشر ثقافة التعليم الذاتي لزيادة تحقيق الاهداف على
            المستوى الشخصي مما ينمي ويساعد نمو وازدهار المجتمع بشكل تدريجي, حرصت
            بشكل مبدأي جلب الدورات التعليمية من اليوتيوب وفلترتها على شكل مجالات
            ومن ثم دورات ويمكنك الالتحاق بمسارات تعليمية كاملة وهي عبارة عن عدة
            دورات وهي اشبه بالاختصاص , حرصنا ايضاًاضافة آلية تفاعل بين المتعلمين
            والموقع فيمكن للمتعلم مثلاً انشاء حساب ومن ثم الدخول وإيجاد قائمة
            المفضلة وقائمة المشاهدة لاحقاً الخاص به, ايضاً يمكنه المساهمة بإضافة
            الدورات في قائمة "اضافة دورة" وهذا ما سيساعد بإذن الله نمو وازدهار
            التحصيلي العلمي في الاكاديمية لتعم الفائدة
          </p>
          <div className="links text-center">
            <Link className="mx-2 btn btn-outline-primary mt-5" to="/about-us">
              مَن نحن
            </Link>
            <Link className="mx-2 btn btn-outline-primary mt-5" to="/">
              الرئيسية
            </Link>
            <Link className="mx-2 btn btn-outline-primary mt-5" to="/fields">
              قائمة المجالات
            </Link>
            <Link
              className="mx-2 btn btn-outline-primary mt-5"
              to="/courses"
            >
              قائمة الدورات
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About_Academy;

// Import Libraries and Tools From Node Modules
import { useHistory } from "react-router-dom";
import { useFirestore } from "../../Firebase/useFireStore";
import { useEffect } from "react";
// style
import "./style.css";

// import Pages
import Footer from "../Footer/Footer";
import Header from "../Home/Header/Header";
import Landing from "../Home/Landing/Landing";
import Course from "../Courses/Course";
import Loeder from "../Loader/Loader";
import Not_Found from '../Not_Found/Not_Found'


const Field_Courses = () => {

  useEffect(() => {
    window.scrollTo(0, 750);
    {!courses[0]
      ? (document.title = "أكاديمية تعلّم ذاتياً | مجال ...")
      : is_link_correct
      ? (document.title = `أكاديمية تعلّم ذاتياً | مجال ${ThisPath.replace(
          "/",
          ""
        ).replace("-", "")}`)
      : (document.title = "هذه الصفحة غير موجودة 404");}
  });

  // Varibale
  const { fields, courses } = useFirestore();
  const History = useHistory();
  const ThisPath = History.location.pathname;

  // Get Array Content All Titles Fields
  const title_fields = fields.map((field) => {
    return field.title.split(" ").join("-");
  });

  // title_fields ?== Path ?
  const is_link_correct = title_fields.includes(ThisPath.replace("/", ""));

  // Get Course.Field = Field
  const Data_From_Courses = courses.filter(
    (i) => i.field === ThisPath.replace("/", "").replace("-", " ") && i.verified === true
  );



  // Course Templit
  const listCourses = Data_From_Courses.map((course) => {
    return (
      <Course
        image={course.image}
        title={course.title}
        link={course.url}
        alt={"صورة" + course.title}
        dec={course.dec}
        color={course.color}
        id={course.id}
      />
    );
  });

  //Return This Page
  return (
    <>
      {!fields[0] ? (
        <Loeder />
      ) : is_link_correct ? (
        <>
          <Header />
          <Landing />
          <div className="fields">
            <h2 className="title">
              مجال {ThisPath.replace("/", "").replace("-", "")}
            </h2>
            <div className="container">
              <div className="fields_list">
                {courses[0] ? (
                  <>{listCourses}</>
                ) : (
                  <span className="container-loader">
                    <div className="loader"></div>
                  </span>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Not_Found />
      )}{" "}
    </>
  );
};

export default Field_Courses;

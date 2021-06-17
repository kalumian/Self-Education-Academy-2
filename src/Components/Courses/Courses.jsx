import Footer from "../Footer/Footer";
import Header from "../Home/Header/Header";
import Landing from "../Home/Landing/Landing";
import Course from "./Course";
import { useFirestore } from "../../Firebase/useFireStore";
import "./style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 830);
    document.title = "أكاديمية تعلّم ذاتياً | قائمة الدورات";
  });

  const { courses } = useFirestore();
  const listCourses = courses
    .filter((i) => i.verified === true)
    .map((course) => {
      return (
        <Course
          image={course.image}
          title={course.title}
          link={course.url}
          alt={"صورة" + course.title}
          dec={course.dec}
          color={course.color}
          id={courses.id}
        />
      );
    });
  return (
    <>
      <Header />
      <Landing />
      <div className="courses">
        <div className="fields">
          <h2 className="title">الدورات</h2>
          <div className="container">
            <div className="row">
              <div className="text-center col-lg-4 mt-3">
                <Link
                  to="/add-course"
                  className="btn btn-outline-primary"
                >
                  أضف دورة
                </Link>
              </div>
              <div className="text-center col-lg-4 mt-3">
                <Link
                  to="/contact"
                  className="btn btn-outline-primary"
                >
                  قنوات التواصل
                </Link>
              </div>
              <div className="text-center col-lg-4 mt-3">
                <Link
                  to="/fields"
                  className="btn btn-outline-primary"
                >
                  قائمة المجالات
                </Link>
              </div>
            </div>
            <div className="fields_list">
              {listCourses[0] ? (
                listCourses
              ) : (
                <span className="container-loader">
                  <div className="loader"></div>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;

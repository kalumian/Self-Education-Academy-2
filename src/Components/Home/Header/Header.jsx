import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DropDowns from "./Dropdowns";
import { useState, useEffect } from "react";
import { auth } from "../../../Firebase/firebase";

const Header = ({ user }) => {

  const [stateDrop, setStateDrop] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <header className="header">
      <div className="container">
        <a href="" className="logo">
          <i className="fas fa-graduation-cap icon-header"></i>
          <h3>أكاديمية تعلّم ذاتياً</h3>
        </a>
        <nav>
          <i
            className="fas fa-bars toggle-menu"
            onClick={() => setStateDrop(!stateDrop)}
          ></i>
          <ul className={stateDrop ? "active-menu" : ""}>
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <DropDowns
              rest={active === 1 ? true : false}
              setActive={setActive}
              active={active}
              number={1}
              title="الاكاديمية"
              listOptions={[
                { id: 1, title: "عن الاكاديمية", link: "about-academy" },
                { id: 2, title: "من نحن", link: "about-us" },
                { id: 3, title: "قنوات الاتصال", link: "contact" },
              ]}
            />
            <DropDowns
              rest={active === 3 ? true : false}
              setActive={setActive}
              number={3}
              active={active}
              title="تعلّم الآن"
              listOptions={[
                { id: 1, title: "الدورات", link: "courses" },
                { id: 2, title: "المجالات", link: "fields" },
              ]}
            />

            <DropDowns
              rest={active === 4 ? true : false}
              setActive={setActive}
              number={4}
              active={active}
              title="ساهم معنا"
              listOptions={[
                { id: 1, title: "الإقتراحات", link: "/contact" },
                { id: 2, title: "اضف دورة", link: "/add-course" }
              ]}
            />
            {user ? (
              <li>
                <DropDowns
                  rest={active === 5 ? true : false}
                  setActive={setActive}
                  number={5}
                  active={active}
                  title={<i className="fas fa-user"></i>}
                  listOptions={[
                    { id: 1, title: user.email, link: "" },
                    { id: 2, title: " قائمة المفضلة", link: "#" },
                    { id: 3, title: "قائمة المشاهدة لاحقاً", link: "#" },
                    {
                      id: 4,
                      title: (
                        <div onClick={() => auth.signOut()}>تسجيل الخروج</div>
                      ),
                      link: "#",
                    },
                  ]}
                />
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className=" text-wihte sign-btn font-weight-bold "
                  >
                    تسجيل الدخول
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className=" text-wihte sign-btn font-weight-bold  "
                  >
                    انشاء حساب جديد
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Redux
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Header);

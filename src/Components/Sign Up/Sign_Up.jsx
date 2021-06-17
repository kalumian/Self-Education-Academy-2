// Import Libraries and Tools From Node Modules
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import { setLoding } from "../../Redux/Actions/actions";
// import style
import "./style.css";

const Sugn_UP = ({ StateLoding, SetLoding }) => {
  // Component Life Circal
  useEffect(() => {
    document.title = "تسجيل حساب جديد";
  }, []);
  // Varibales
  const initialState = { email: "", password: "", confirmPassword: "" };
  const history = useHistory();

  //state
  const [stateTitle, setStateTitle] = useState("normal");
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(false);

  //Function
  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    setError("");
    setMessage(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.password !== input.confirmPassword)
      return setError("كلمة المرو غير متطابقة !");
    try {
      setError("");
      setMessage(false);
      await auth.createUserWithEmailAndPassword(input.email, input.password);
      setInput(initialState);
      await auth.currentUser.sendEmailVerification();
      setMessage(true);
      // SetLoding();
      auth.signOut()

    } catch (err) {
      switch (err.message) {
        case "There is no user record corresponding to this identifier. The user may have been deleted.": {
          return setError(
            "لا يوجد حساب مستخدم بهذه المعلومات المدخلة , الرجاء التأكد من المدخلات"
          );
        }
        case "The email address is already in use by another account.": {
          return setError("البريد الإلكتروني المدُخل مستعمل من قبل !");
        }
        case "Password should be at least 6 characters": {
          return setError("يجب ان تحتوي كلمة المرور 6 خانات على الأقل");
        }
        case "A network error (such as timeout, interrupted connection or unreachable host) has occurred.": {
          return setError("حدث خطأ في الشبكة");
        }
        default:
          return setError(err.message);
      }
    }
  };
  // Return Component
  return (
    <div className="Login">
      <div className="container">
        <div className="row content-login">
          <div className="col-md-6">
            <div className="info">
              <span className="col-line"></span>
              <div className="info-content">
                <i
                  className={
                    stateTitle === "email"
                      ? "far fa-envelope login-icon"
                      : stateTitle === "password"
                      ? "fas fa-unlock-alt login-icon"
                      : stateTitle === "normal"
                      ? "fas fa-graduation-cap login-icon"
                      : stateTitle === "confirmPassword"
                      ? "fas fa-unlock-alt login-icon"
                      : ""
                  }
                ></i>
                <h2 className="">
                  {stateTitle === "email"
                    ? "البريد الإلكتروني"
                    : stateTitle === "password"
                    ? "كلمة المرور"
                    : stateTitle === "normal"
                    ? "أكاديمية تعلّم ذاتياً"
                    : stateTitle === "confirmPassword"
                    ? "تأكيد كلمة المرور"
                    : ""}
                </h2>
                <ul className="rtl advices-list"></ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 rtl">
            <h3 className="signin-text mb-4">تسجيل حساب جديد</h3>
            <form action="" onSubmit={handleSubmit}>
              <div
                className="form-group"
                onMouseLeave={() => setStateTitle("normal")}
                onMouseEnter={() => setStateTitle("email")}
              >
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  autoComplete="off"
                  value={input.email}
                  onChange={handleChange}
                  onFocus={() => setStateTitle("email")}
                />
              </div>
              <div
                className="form-group"
                onMouseLeave={() => setStateTitle("normal")}
                onMouseEnter={() => setStateTitle("password")}
              >
                <label htmlFor="password ">كلمة المرور</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={input.password}
                  onChange={handleChange}
                  onFocus={() => setStateTitle("password")}
                />
              </div>
              <div
                className="form-group"
                onMouseLeave={() => setStateTitle("normal")}
                onMouseEnter={() => setStateTitle("confirmPassword")}
              >
                <label htmlFor="confirmPassword">تَأكيد كَلمة المُرور</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  value={input.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => setStateTitle("confirmPassword")}
                />
              </div>
              <div className="inputs-wrong">
                {error}
                <span className="inputs-sucss">
                  {message ? (
                    <>
                      , تم انشاء الحساب , انتقل للبريد الإلكتروني لتفعيل الحساب{" "}
                      <Link to="/">الانتقال للصفحة الرئيسية </Link>
                    </>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <button className="btn btn-class mt-3">تسجيل الحساب</button>
              <div className="mt-3">
                تمتلك حساباً؟ ,<Link to="/login">تسجيل الدخول</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

// Redux
const mapStateToProps = (state) => {
  return {
    StateLoding: state.loding,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // SetLoding: () => dispatch(setLoding()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sugn_UP);

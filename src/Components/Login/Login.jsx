// Import Libraries and Tools From Node Modules
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import { setUser } from "../../Redux/Actions/actions";
// import style
import "./style.css";

const Login = ({ StateLoding, user, setUser }) => {
  // Component Life Circal
  useEffect(() => {
    document.title = "تسجيل الدخول";
  }, []);

  // Varibales
  const initialState = { email: "", password: "" };
  const history = useHistory();

  //state
  const [stateTitle, setStateTitle] = useState("normal");
  const [input, setInput] = useState(initialState);
  const [error, setError] = useState("");

  //Function
  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      setInput(initialState);
      setUser(auth.currentUser);
      history.push("/");
    } catch (err) {
      switch (err.message) {
        case "There is no user record corresponding to this identifier. The user may have been deleted.": {
          return setError(
            "لا يوجد حساب مستخدم بهذه المعلومات المدخلة , الرجاء التأكد من المدخلات"
          );
        }
        case "The password is invalid or the user does not have a password.": {
          return setError(
            "المعلومات المدخلة غير صحيحة, تأكد من كلمة المرور والبريد الإلكتروني"
          );
        }
        case "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.": {
          return setError(
            "الحساب موقف مؤقتاً, لكثرة محاولات الدخول الفاشلة والمتكررة, يمكنك الدخول لاحقاً او اللجوء لتغيير كلمة المرور"
          );
        }
        case "The email address is badly formatted.": {
          return setError("تأكد من كتابة البريد الإلكتروني بشكل صحيح !");
        }
        case '{"error":{"code":400,"message":"CONFIGURATION_NOT_FOUND","errors":[{"message":"CONFIGURATION_NOT_FOUND","domain":"global","reason":"invalid"}]}}': {
          return setError("حدث مشكلة بالشبكة");
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
                    : ""}
                </h2>
                <ul className="rtl advices-list"></ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 rtl">
            <h3 className="signin-text mb-4">تسجيل الدخول</h3>
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
                <label htmlFor="password">كلمة المرور</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={input.password}
                  onFocus={"password"}
                  onChange={handleChange}
                  onFocus={() => setStateTitle("password")}
                />
              </div>
              <div className="inputs-wrong">{error}</div>
              <div>
                <Link className="password-forget" to="/getpassword">
                  نسيت كلمة المرور
                </Link>
              </div>

              <button className="btn btn-class mt-3">تسجيل الدخول</button>
              <div className="mt-3">
                لا تمتلك حساباً؟ ,<Link to="/signup">سجّل الآن</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Redux
const mapStateToProps = (state) => {
  return {
    StateLoding: state.loding,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

// Import Libraries and Tools From Node Modules
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
// import style
import "./style.css";

const ForgetPassword = () => {

  useEffect(() => {
    document.title = "أكاديمية تعلّم ذاتياً";
  }, []);

  // State
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState(false)

  // Function
  const handleEmail = (e) => {
    e.preventDefault();
    setError('')
    setEmail(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setMessage(true);
      })
      .catch((err) => {
        setError("حدث خطأ ما, الرجاء إعادة المحاولة والتأكد من المدخلات");
      });
  };

  return (
    <>
      <div className="container">
        <div className="content-forgetpassword ltr">
          <i className="fas fa-key forgetpassword-icon"></i>
          <h3>إعادة تعيين كلمة المرور</h3>
          <h4 className="text-center">
            يمكنك إعادة تعيين كلمة المرور باستخدام البريد الإلكتروني لحسابك
          </h4>
          <form action="" onSubmit={handleSend}>
            <div className="">
              <input
                type="email"
                name="email"
                placeholder="ادخل البريد الإلكتروني"
                className="mb-4 text-center"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div>
              <button className="btn mb-3">إعادة تعيين كلمة المرور</button>
            </div>
          </form>
          <div className="inputs-wrong mb-3">
            {error}
            <span className="inputs-sucss">
              {message ? (
                <>
                  تم الارسال بنجاح, تفقّد بريدك الإلكتروني
                  {" "}<Link to="./login">تسجيل الدخول</Link>
                </>
              ) : (
                <></>
              )}
            </span>
          </div>
          <div className="forgetpassword-link">
            تذكرت كلمة المرور ,<Link to="/login">تراجع</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;

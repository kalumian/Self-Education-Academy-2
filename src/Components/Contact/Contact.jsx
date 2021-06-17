import Footer from "../Footer/Footer";
import Landing from "../Home/Landing/Landing";
import Header from "../Home/Header/Header";
import { useState } from "react";
import { useFirestore } from "../../Firebase/useFireStore";
import { useEffect } from "react";
import "./style.css";

const InitialState = { name: "", email: "", message: "" };

const Contact = () => {

  const { addMessage } = useFirestore();

  useEffect(() => {
    window.scrollTo(0, 750);
    document.title = "أكاديمية تعلّم ذاتياً | تواصل والاقتراح";
  }, []);

  // State
  const [input, setInput] = useState(InitialState);
  const [kind, setKind] = useState({ kind: "" });
  const [message, setMessage] = useState("");

  // functions

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.name && input.email && input.message && kind.kind) {
      setMessage(
        "شكراً لكم, تم الارسال بنجاح سيتم المراجعة والقيام بالأمر اللازم , طاب يومك ;"
      );
      addMessage(input, kind);
      setInput(InitialState);
      setKind({ kind: "" });
    } else {
      setMessage(
        "فضلاً تأكد من جميع إدخال البيانات في جميع الحقول والتأكد من إختيار نوع الرسالة !!"
      );
    }
  };

  return (
    <div className="contact">
      <Header />
      <Landing />
      <section className="get_in_touch rtl">
        <h1 className="title_contact">قنوات الإتصال</h1>
        <div className="container">
          <form className="contct-form row" onSubmit={handleSubmit}>
            <div className="form-field col-lg-6">
              <input
                autoComplete="off"
                id="email"
                className="input-text"
                value={input.email}
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
              />
            </div>
            <div className="form-field col-lg-6">
              <input
                value={input.name}
                id="name"
                className="input-text"
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="الأسم"
              />
            </div>

            <div className="form-field col-lg-12">
              <input
                value={input.message}
                id="message"
                className="input-text"
                type="text"
                name="message"
                onChange={handleChange}
                placeholder="محتوى الرسالة"
              />
            </div>

            <div className="form-field col-lg-12">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-outline-danger mx-2"
                  onClick={() => setKind({ kind: "مشكلة" })}
                >
                  مشكلة
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success mx-2"
                  onClick={() => setKind({ kind: "إقتراح" })}
                >
                  إقتراح
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mx-2"
                  onClick={() => setKind({ kind: "اخرى" })}
                >
                  اخرى
                </button>
              </div>
            </div>
            <div className="col-lg-12">
              <span className="message">{message}</span>
            </div>
            <div className="form-field col-lg-12">
              <input className="submit-btn" type="submit" value="إرسال" />
            </div>
            <div className="form-field col-lg-12 text-center">
              <a href="/https://twitter.com/kalumian1" className="btn btn-outline-primary mx-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="btn btn-outline-danger mx-2">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="" className="btn btn-outline-secondary mx-2">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

import Footer from "../Footer/Footer";
import Header from "../Home/Header/Header";
import Landing from "../Home/Landing/Landing";
import "./style.css";
import { useEffect, useState } from "react";
import { useFirestore } from "../../Firebase/useFireStore";
import { Link } from "react-router-dom";

const InitialState = {
  title: "",
  color: "#000000",
  url: "",
  image: "",
  dec: "",
};

const Add_Course = () => {
  // state
  const { fields, addCourses } = useFirestore();
  const [input, setInput] = useState(InitialState);
  const [plateform, setPlateform] = useState({ plateform: "" });
  const [field, setField] = useState({ field: "" });
  const [message, setMessage] = useState("");

  // function
  const handleChangeInput = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    setMessage("");
  };

  const handleSubmet = (e) => {
    e.preventDefault();

    if (
      input.color &&
      input.dec &&
      input.dec.length <= 150 &&
      input.image &&
      input.title &&
      input.url &&
      field.field &&
      plateform.plateform
    ) {
      addCourses(input, plateform, field);
      setMessage(
        "شكراً لكم, تم الارسال بنجاح سيتم المراجعة والقيام بالأمر اللازم , طاب يومك "
      );
      setInput(InitialState);
    } else {
      setMessage(
        "فضلاً تأكد من جميع إدخال البيانات في جميع الحقول والتأكد من إختيار منصة الدورة !!"
      );
    }
  };

  const handleSelect = ({ target }) => {
    setField({ field: target.value });
  };

  useEffect(() => {
    window.scrollTo(0, 900);
    document.title = "أكاديمية تعلّم ذاتياً | اضافة دورة";
  }, []);

  return (
    <>
      <Header />
      <Landing />
      <section className="get_in_touch rtl">
        <h1 className="title_contact">أضف دورة تعليمية</h1>
        <div className="container">
          <form action="" className="contct-form row" onSubmit={handleSubmet}>
            <div className="form-field col-lg-6">
              <input
                name="title"
                className="input-text"
                type="text"
                placeholder="اسم الدورة التعليمية"
                onChange={handleChangeInput}
                value={input.title}
                onChange={handleChangeInput}
              />
            </div>
            <div className="form-field col-lg-6">
              <input
                className="input-text"
                type="text"
                placeholder="رابط ال URL"
                name="url"
                onChange={handleChangeInput}
                value={input.url}
                autoComplete="off"
              />
            </div>
            <div className="form-field col-lg-6">
              <input
                className="input-text"
                type="text"
                placeholder="إدراج رابط صورة"
                name="image"
                onChange={handleChangeInput}
                value={input.image}
                autoComplete="off"
              />
            </div>
            <div className="form-field col-lg-6">
              <select
                onChange={handleSelect}
                className="form-select"
                aria-label="Default select example "
              >
                <option selected>اختر المجال المناسب</option>
                {fields.map((i) => {
                  return (
                    <option value={i.title} key={i.id}>
                      {i.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-field col-lg-12">
              <label
                htmlFor="dec"
                className=""
                style={
                  input.dec.length <= 150
                    ? { color: "#2eba21e0" }
                    : { color: "#c00606df" }
                }
              >
                {input.dec.length} / 150
              </label>
              <input
                className="input-text"
                type="text"
                placeholder="وصف وجيز عن الدورة بعدد حروف لا تزيد عن 150 "
                name="dec"
                onChange={handleChangeInput}
                value={input.dec}
                autoComplete="off"
              />
            </div>

            <div className="form-field col-lg-12">
              <label htmlFor="color-course">أقترح لون للدورة</label>
              <input
                id="color-course"
                className="input-text"
                type="color"
                name="color"
                onChange={handleChangeInput}
                value={input.color}
              />
            </div>
            <div className="form-field col-lg-12">
              منصة الدورة :
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-outline-danger mx-2"
                  value="youtube"
                  onClick={() => setPlateform({ plateform: "youtube" })}
                >
                  يوتيوب
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success mx-2"
                  value="other"
                  onClick={() => setPlateform({ plateform: "other" })}
                >
                  أخرى
                </button>
              </div>
            </div>
            <div className="col-lg-12">
              <span className="message">{message}</span>
            </div>
            <div className="form-field col-lg-12">
              <input
                className="submit-btn"
                type="submit"
                value="إرسال"
                onClick={handleSubmet}
              />
            </div>
            <div className="form-field col-lg-12 text-center">
              <a
                href="https://twitter.com/kalumian1"
                className="btn btn-outline-primary mx-2"
              >
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
    </>
  );
};

export default Add_Course;

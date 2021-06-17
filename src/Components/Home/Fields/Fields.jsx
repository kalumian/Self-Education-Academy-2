import Field from "./Field";
import { useFirestore } from "../../../Firebase/useFireStore";
import './style.css'
const Fields = () => {
  const { fields } = useFirestore();
  const listFields = fields.map((field) => {
        return (
      <Field
        id={field.id}
        image={field.image}
        title={field.title}
        link={field.title.replace('20' , '').replace('%' , ' ').split(" ").join('-')}
        alt={field.title + "صورة"}
        dec={field.dec}
        color={field.color}
      />
    );
  });
  return (
    <div className="fields">
      <h2 className="title">المجالات التعليمية</h2>
      <div className="container">
        <div className="fields_list">
          {listFields[0] ? listFields :<span className="container-loader"><div className="loader"></div></span>}
        </div>
      </div>
    </div>
  );
};

export default Fields;

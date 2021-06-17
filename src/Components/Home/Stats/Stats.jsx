import Box from "./Box";
import { useFirestore } from "../../../Firebase/useFireStore";

const Stats = () => {
    const { fields, courses } = useFirestore();
  return (
    <div>
      <h3 className="title">المحتويات</h3>
      <div className="stats">
        <div className="container">
          <Box
            icon="fas fa-sticky-note"
            title="دورات تعليمية"
            count={courses.length === 0 ? "∞" : courses.length}
            link="/courses"
          />
          <Box
            icon="fas fa-book"
            title="مجالات تعليمية"
            count={fields.length === 0 ? "∞" : fields.length}
            link="/fields"
          />

          <Box icon="fas fa-boxes" title="مسارات تعليمية" count={'قريباً'} link="#" />
        </div>
      </div>
    </div>
  );
};

export default Stats;

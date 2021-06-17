import { connect } from "react-redux";
import "./style.css";

const Loader = ({ loding }) => {
  return (
    <div className="loder-section">
      {loding ? (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loding: state.loding,
  };
};
export default connect(mapStateToProps)(Loader);

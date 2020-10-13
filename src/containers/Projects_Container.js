import { connect } from "react-redux";
import Projects from "../components/Projects";

const mapStateToProps = (state) => ({
  testNumber: state.testNumber,
  photoArray: state.photoArray
})

export default connect(mapStateToProps, null)(Projects);
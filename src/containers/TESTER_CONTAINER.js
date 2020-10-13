import { connect } from "react-redux";
import TESTER from "../components/TESTER";

const mapStateToProps = (state) => ({
  testNumber: state.testNumber,
  photoArray: state.photoArray
})

export default connect(mapStateToProps, null)(TESTER);
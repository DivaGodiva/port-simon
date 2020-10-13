import { connect } from "react-redux";
import { testRight } from "../actions/index";
import RIGHT_BUTTON from "../components/RIGHT_BUTTON";

const mapStateToProps = (state) => ({
  testNumber: state.testNumber
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(testRight())
})

export default connect(mapStateToProps, mapDispatchToProps)(RIGHT_BUTTON);
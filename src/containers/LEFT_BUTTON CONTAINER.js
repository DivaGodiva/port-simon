import { connect } from "react-redux";
import { testLeft } from "../actions/index";
import LEFT_BUTTON from "../components/LEFT_BUTTON";

const mapStateToProps = (state) => ({
  testNumber: state.testNumber
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(testLeft())
})

export default connect(mapStateToProps, mapDispatchToProps)(LEFT_BUTTON);
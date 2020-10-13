import { connect } from "react-redux";
import { testIncrement } from "../actions/index";
import TESTER_INCREMENT from "../components/TESTER_INCREMENT";

const mapStateToProps = (state) => ({
  testNumber: state.testNumber
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(testIncrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(TESTER_INCREMENT);
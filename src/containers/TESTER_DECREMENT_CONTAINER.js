import { connect } from "react-redux";
import { testDecrement } from "../actions/index";
import TESTER_DECREMENT from "../components/TESTER_DECREMENT";

const mapStateToProps = (state) => ({
  testNumber: state.testNumber
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch(testDecrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(TESTER_DECREMENT);
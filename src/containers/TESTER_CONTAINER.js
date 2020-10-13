import { connect } from "react-redux";
import TESTER from "../components/TESTER";

const mapStateToProps = (state) => ({
  testNumber: state.testNumber
})

export default connect(mapStateToProps, null)(TESTER);
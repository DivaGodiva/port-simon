import { connect } from "react-redux";
import { testEnter, testLeave } from "../actions/index";
import Projects from "../components/Projects";

const mapStateToProps = (state) => ({
  testNumber: state.testNumber,
  photoArray: state.photoArray,
  photoLinks: state.photoLinks,
  greyToggle: state.greyToggle
})

const mapDispatchToProps = (dispatch) => ({
  handleMouseEnter: () => dispatch(testEnter()),
  handleMouseLeave: () => dispatch(testLeave())
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
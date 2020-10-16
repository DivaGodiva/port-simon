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
  handleMouseEnter: number => dispatch(testEnter(number)),
  handleMouseLeave: number => dispatch(testLeave(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
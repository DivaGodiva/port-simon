import { RIGHT, LEFT } from "../actions/index";

const initialState = {
  testNumber: [0, 1, 2],
  photoArray: ['img1', 'img2', 'img3', 'img4', 'img5']
};

function rootReducer(state = initialState, action) {
  if (action.type === RIGHT) {
    console.log(`Go Right dispatched - Previous state: ${state.testNumber}`)
    return Object.assign({}, state, {
      testNumber: state.testNumber.map(n => n === state.photoArray.length - 1 ? 0: n + 1)
    })
  } else if (action.type === LEFT) {
    console.log(`Go Left dispatched - Previous state: ${state.testNumber}`)
    return Object.assign({}, state, {
      testNumber: state.testNumber.map(n => n === 0 ? state.photoArray.length - 1: n - 1)
    })
  }
  return state;
};

export default rootReducer;
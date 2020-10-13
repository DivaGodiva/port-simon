import { INCREMENT, DECREMENT } from "../actions/index";

const initialState = {
  testNumber: 0,
  photoArray: ['img1', 'img2', 'img3', 'img4']
};

function rootReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    console.log(`Go Right dispatched - Previous state: ${state.testNumber}`)
    return Object.assign({}, state, {
      testNumber: state.testNumber === state.photoArray.length - 1 ? 0 : state.testNumber + 1  
    })
  } else if (action.type === DECREMENT) {
    console.log(`Go Left dispatched - Previous state: ${state.testNumber}`)
    return Object.assign({}, state, {
      testNumber: state.testNumber === 0 ? 3 : state.testNumber - 1
    })
  }
  return state;
};

export default rootReducer;



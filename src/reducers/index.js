import { INCREMENT, DECREMENT } from "../actions/index";

const initialState = {
  testNumber: 1,
  photoArray: ['img1', 'img2', 'img3', 'img4']
};

function rootReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    console.log(`INCREMENT dispatched - Previous state: ${state.testNumber}`)
    return Object.assign({}, state, {
      testNumber: state.testNumber + 1
    })
  } else if (action.type === DECREMENT) {
    console.log(`DECREMENT dispatched - Previous state: ${state.testNumber}`)
    return Object.assign({}, state, {
      testNumber: state.testNumber - 1
    })
  }
  return state;
};

export default rootReducer;



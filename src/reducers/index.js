import { RIGHT, LEFT } from "../actions/index";

const initialState = {
  testNumber: [0, 1, 2],
  photoArray: ["/assets/lazy-susan-stock-1.jpg", "/assets/lazy-susan-stock-2.jpg", "/assets/lazy-susan-stock-3.jpg", "/assets/lazy-susan-stock-4.jpg", "/assets/lazy-susan-stock-5.jpg"],
  photoLinks: ["https://www.w3schools.com", "https://reactjs.org/docs/hooks-overview.html", "https://manganelo.com/chapter/tower_of_god_manga/chapter_120", "https://myanimelist.net/mangalist/Godivan", "https://summitathleticclub.com/tennis-pickleball/"]
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
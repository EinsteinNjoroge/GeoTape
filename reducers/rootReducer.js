import actionTypes from "../actionTypes";
const initialState = [];

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_MEASUREMENT:
      return [...state, action.measurement];

    case actionTypes.DELETE_MEASUREMENT:
      const newState = [...state].filter((x) => x.id !== action.id);
      return newState;

    case actionTypes.UPDATE_MEASUREMENT:
      const updatedState = [...state].filter(
        (x) => x.id !== action.measurement.id
      );
      updatedState.unshift(action.measurement);
      return updatedState;

    default:
      return state;
  }
}

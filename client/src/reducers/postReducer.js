// actions
import { ADD_POST } from "../actions/types";

// initialState
const initialState = {
  posts: [],
  post: {},
  loading: false
};

// reducer action types
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
}

import { createAction, handleActions } from 'redux-actions';

// ducks패턴을 사용하여 reducer 작성

// action
const CREATE = "./todo/CREATE";
const REMOVE = "./todo/REMOVE";
const TOGGLE = "./todo/TOGGLE";

// action creator
export const create = createAction(CREATE, text => text);
export const remove = createAction(REMOVE, id => id);
export const toggle = createAction(TOGGLE, id => id);

let id = 1;
const initialState = {
  todos: []
};

export default function todo(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        todo: state.todo.concat({
          id: id++,
          text: action.text,
          isToggle: false
        })
      };

    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, isToggle: !todo.isToggle };
          } else {
            return todo;
          }
        })
      };

    default:
      return state;
  }
}

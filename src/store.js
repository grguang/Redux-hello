import { createStore } from 'redux'

let comments = [
  {author:'grg',content:'嗯，不错，可以的'},{author:'lala',content:'嗯，可以，很强势'}
]

function commentReducer(state=[],action){
  switch (action.type) {
    case 'ADD_COMMENT':
      return([...state,{author:action.author,content:action.content}])
    default:
    return state;
  }
}

let store = createStore(commentReducer,comments);
export default store;

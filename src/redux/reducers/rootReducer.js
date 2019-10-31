const DEFAULT_STATE = {}

const rootReducer = (state = DEFAULT_STATE, action) => {
  console.log(action, state)  // eslint-disable-line 
  switch(action.type){
  case "ACTION":
    return {
      ...state,
      ...action.data
    }
  default:
    return state
  }
}

export default rootReducer

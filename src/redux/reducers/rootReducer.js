import { ReduxState } from "../types"
import { ActionTypes } from "../actions/types"

const DEFAULT_STATE: ReduxState = {}

const rootReducer = (state: ReduxState = DEFAULT_STATE, action: ActionTypes) => {
  console.log(action)  // eslint-disable-line
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

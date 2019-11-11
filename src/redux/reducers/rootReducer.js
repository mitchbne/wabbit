// @flow
import type { ReduxState } from "../types"
import type { ActionTypes } from "../actions/types"

const DEFAULT_STATE: ReduxState = {}

const rootReducer = (state: ReduxState = DEFAULT_STATE, action: ActionTypes) => {
  console.log(action) // eslint-disable-line no-console
  switch(action.type){
  case "ACTION":
    return {
      ...state,
      ...action.payload,
    }
  default:
    return state
  }
}

export default rootReducer

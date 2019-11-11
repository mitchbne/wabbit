// @flow

import * as Redux from "redux"
import type { ActionTypes } from "./actions/types"

export type ReduxState = {}

export type ReduxReducer = Redux.Reducer<ReduxState, ActionTypes>
export type ReduxStore = Redux.Store<ReduxState, ActionTypes>
type GetState = () => ReduxState
export type ReduxDispatch = Redux.Dispatch<ActionTypes> & ((ReduxDispatch, GetState) => ?Promise<mixed>) => any // eslint-disable-line flowtype/no-weak-types

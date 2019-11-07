// @flow

import * as Redux from "redux"
import type { ActionTypes } from "./actions/types"

export type ReduxState = {||}

export type ReduxReducer = Redux.Reducer<ReduxState, ActionTypes>
export type ReduxStore = Redux.Store<ReduxState, ActionTypes>
type GetState = () => ReduxState

type Thunk<A> = ((ReduxDispatch, GetState) => ?Promise<A>) => any // eslint-disable-line flowtype/no-weak-types
export type ReduxDispatch = Redux.Dispatch<ActionTypes> & Thunk<mixed>

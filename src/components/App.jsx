// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import action from "../redux/actions/actions"
import type { ReduxDispatch } from "../redux/types"

type OwnProps = {} 
type ReduxProps = {
  action: () => void,
}

type Props = {
  ...ReduxProps,
  ...OwnProps,
}


export class App extends Component<Props> {
  componentDidMount() {
    // $FlowFixMe
    this.props.action()
  }

  render() {
    return (
      <div className="flex flex-col bg-gray-900 h-screen w-screen items-center justify-center p-20">
        <div className="w-full md:w-1/2 ">
          <img alt="logo" src={require("../images/logo.svg")} />
          <p className="text-center text-orange-400 text-3xl mt-16">Welcome to Wabbit!</p>
          <a className="text-white block w-full text-center text-lg" href="https://github.com/mitchbne/" rel="noopener noreferrer" target="_blank">@mitchbne</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch: ReduxDispatch) => ({ action: () => dispatch(action({ tedst: "data" })) })

export default connect<Props, OwnProps, _, _, _, _>(mapStateToProps, mapDispatchToProps )(App)

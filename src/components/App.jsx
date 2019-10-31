// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import action from "../redux/actions/actions"

type Props = {
  action: () => void
}

export class App extends Component<Props> {
  componentDidMount() {
    this.props.action()
  }

  render() {
    return (
      <div className="flex flex-col bg-gray-900 h-screen w-screen items-center justify-center p-20">
        <div className="w-full md:w-1/2">
          <img src={require("../images/logo.svg")} alt="logo" />
          <p className="text-center text-orange-400 text-3xl mt-16">Welcome to Wabbit!</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dipsatch) => ({
  action: () => dipsatch(action({ test: "data" }))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

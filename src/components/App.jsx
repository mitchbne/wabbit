// @flow
import React from "react"

const App = () => (
  <div className="flex flex-col items-center justify-center w-screen h-screen p-20 bg-gray-900">
    <div className="w-full md:w-1/2 ">
      <img alt="logo" className="mx-auto" src={require("../images/logo.svg")} />
      <p className="mt-16 text-3xl text-center text-orange-400">Welcome to Wabbit!</p>
      <a className="block w-full text-lg text-center text-white" href="https://github.com/mitchbne/" rel="noopener noreferrer" target="_blank">@mitchbne</a>
    </div>
  </div>
)

export default App

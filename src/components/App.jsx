// @flow
import React from "react"

const App = () => (
  <div className="flex flex-col bg-gray-900 h-screen w-screen items-center justify-center p-20">
    <div className="w-full md:w-1/2 ">
      <img alt="logo" className="mx-auto" src={require("../images/logo.svg")} />
      <p className="text-center text-orange-400 text-3xl mt-16">Welcome to Wabbit!</p>
      <a className="text-white block w-full text-center text-lg" href="https://github.com/mitchbne/" rel="noopener noreferrer" target="_blank">@mitchbne</a>
    </div>
  </div>
)

export default App

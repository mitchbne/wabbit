import React from "react"

const App = () => (
  <div className="flex flex-col items-center justify-center w-screen h-screen py-20 px-4 bg-gray-050">
    <div className="w-full max-w-2xl ">
      <img alt="logo" className="mx-auto h-12" src="https://tailwindui.com/img/tailwindui-logo.svg" />
      <p className="mt-4 text-2xl text-center text-teal-400">Welcome to Wabbit!</p>
      <a className="block w-full text-base text-center text-gray-600" href="https://github.com/mitchbne/" rel="noopener noreferrer" target="_blank">@mitchbne</a>
    </div>
  </div>
)

export default App
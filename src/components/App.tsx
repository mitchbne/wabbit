import React from "react"

const App = () => (
  <div className="flex flex-col items-center justify-center w-screen h-screen px-4 py-20 bg-gray-100">
    <div className="w-full max-w-2xl ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-cyan-400 to-lightBlue-500 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative py-16 bg-white shadow-md sm:rounded-3xl sm:px-20">
          <p className="mt-4 text-3xl font-bold text-left text-blueGray-700">Welcome to Wabbit!</p>
          <a  className="mt-2 text-lg text-left text-cyan-600" href="https://github.com/mitchbne/" rel="noopener noreferrer" target="_blank">@mitchbne</a>
        </div>
      </div>
    </div>
  </div>
)

export default App

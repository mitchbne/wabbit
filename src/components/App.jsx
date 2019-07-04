import React from "react"
import Navigation from "./Navigation"

function App() {
  return (
    <div className="flex flex-col bg-gray-900 h-screen w-screen">
      <Navigation/>
      <div className="flex flex-grow container bg-white">
        {/* Main Content */}
      </div>
    </div>
  )
}

export default App

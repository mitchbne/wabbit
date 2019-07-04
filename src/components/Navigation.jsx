import React, { Component } from "react"
import Logo from "../images/logo.svg"
import { Link } from "react-router-dom"

class Navigation extends Component {
  render() {
    return (
      <nav className="flex bg-red-800 p-3 shadow">
        <div className="flex flex-grow container bg-white p-3">
          <Link to="/" className="mx-auto h-auto w-auto">
            <img src={Logo} className="w-1/2 mx-auto" alt="wabbit-logo" />
          </Link>
        </div>
      </nav>
    )
  }
}

export default Navigation
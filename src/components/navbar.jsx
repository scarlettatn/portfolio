import React, { Component } from 'react'

export default class Navbar extends Component {
  render () {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://github.com">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="https://github.com">Home   </a>
            <a className="nav-item nav-link" href="#projects" data-nav-section="projects">My Projects</a>
            <a className="nav-item nav-link" href="#skills" data-nav-section="skills">Skills</a>
            <a className="nav-item nav-link" href="https://github.com">Contact Me</a>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}

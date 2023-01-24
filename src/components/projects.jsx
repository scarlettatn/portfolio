import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class Projects extends Component {
  render () {
    return (
      <section id="project">
      <div>
        <h1><i className="fa-regular fa-code" /></h1>
        <FontAwesomeIcon icon={faCoffee} />
        <h1> Projects </h1>
      </div>
      </section>
    )
  }
}

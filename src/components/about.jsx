import React, { Component } from 'react'

export default class About extends Component {
  render () {
    return (
    <div className="about-container">
      <h1>Hi, I'm Scarlett</h1>
      <p>I love building amazing apps. I recently switched career from finance to full stack web development.</p>

{/* Contact Button */}
      <div className="">
        <a href="#contact" className="">
          Get in touch
        </a>
      </div>
{/* Projects Button */}
      <div className="">
        <a href="#projects" className="">
          Projects
        </a>
      </div>

    </div>
    )
  }
}

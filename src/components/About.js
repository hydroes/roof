import React from 'react'

const About = ({getUsers, ...props}) => (
  <div>
    <h2>About</h2>
    <p><button onClick={getUsers}>get users</button></p>
  </div>
)

export default About

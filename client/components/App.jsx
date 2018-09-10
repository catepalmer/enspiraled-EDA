import React from 'react'
import Circle from './Circle'

const width = window.innerWidth
const height = window.innerHeight

const circle = {
  cx: width / 2,
  cy: height / 2,
  level: 0,
  r: 256
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <svg width={width} height={height}>
        <Circle circle={circle} />
      </svg>
    )
  }
}

export default App
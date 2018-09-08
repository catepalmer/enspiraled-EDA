import React from 'react'
import Circle from './Circle'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Circle width={this.props.width} height={this.props.height} />
    )
  }
}

export default App
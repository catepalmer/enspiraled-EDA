import React from 'react'
import Circle from './Circle'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Circle width={this.props.width} height={this.props.height} cx={this.props.width / 2} cy={this.props.height / 2} level={0} r={256} hasChildren={false} children={[]} />
    )
  }
}

export default App
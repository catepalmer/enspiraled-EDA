import React from 'react'

class Circle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      circle: {
        cx: props.width / 2,
        cy: props.height / 2,
        level: 0,
        r: 256,
        hasChildren: false
      }
    }
  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height} >
        <circle cx={this.state.circle.cx} cy={this.state.circle.cy} r={this.state.circle.r} />
      </svg>
    )
  }

}

export default Circle
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
        hasChildren: false,
        children: []
      }
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handleMouseOver () {
      this.setState({
          hasChildren: true,
          children: [
              {
                circle: {
                    cx: this.state.cx,
                    cy: this.state.cy - this.state.r,
                    level: this.state.level + 1,
                    r: this.state.r / 2,
                    hasChildren: false,
                    children: []
                  }
              },
              {
                circle: {
                    cx: this.state.cx + this.state.r,
                    cy: this.state.cy,
                    level: this.state.level + 1,
                    r: this.state.r / 2,
                    hasChildren: false,
                    children: []
                  }
              },
              {
                circle: {
                    cx: this.state.cx,
                    cy: this.state.cy + this.state.r,
                    level: this.state.level + 1,
                    r: this.state.r / 2,
                    hasChildren: false,
                    children: []
                  }
              },
              {
                circle: {
                    cx: this.state.cx - this.state.r,
                    cy: this.state.cy,
                    level: this.state.level + 1,
                    r: this.state.r / 2,
                    hasChildren: false,
                    children: []
                  }
              }
          ]
      })
  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height} >
        <circle cx={this.state.circle.cx} cy={this.state.circle.cy} r={this.state.circle.r} mouseover={this.handleMouseOver} />
      </svg>
    )
  }

}

export default Circle
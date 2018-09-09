import React from 'react'

class Circle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cx: props.cx,
      cy: props.cy,
      level: props.level,
      r: props.r,
      hasChildren: props.hasChildren,
      children: props.children
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.getColour = this.getColour.bind(this)
  }

  getColour(level){
  const colours = ['lightskyblue', 'lightseagreen', 'pink', 'lightgreen', 'lightsalmon', 'lightslategray', 'lightgoldenrodyellow']
    return colours[Math.floor(level % colours.length)]
  }

  handleMouseOver() {
    if (this.state.hasChildren === false) {
      this.setState({
        hasChildren: true,
        children: [
          {
            cx: this.state.cx,
            cy: this.state.cy - this.state.r,
            level: this.state.level + 1,
            r: this.state.r / 2,
            hasChildren: false,
            children: []
          },
          {
            cx: this.state.cx + this.state.r,
            cy: this.state.cy,
            level: this.state.level + 1,
            r: this.state.r / 2,
            hasChildren: false,
            children: []
          },
          {
            cx: this.state.cx,
            cy: this.state.cy + this.state.r,
            level: this.state.level + 1,
            r: this.state.r / 2,
            hasChildren: false,
            children: []
          },
          {
            cx: this.state.cx - this.state.r,
            cy: this.state.cy,
            level: this.state.level + 1,
            r: this.state.r / 2,
            hasChildren: false,
            children: []
          }
        ]
      })
    }
  }

  render() {
    if (this.state.hasChildren === true) {
      return (
        <svg width={this.props.width} height={this.props.height} >
          <circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} onMouseOver={this.handleMouseOver} fill={this.getColour(this.state.level)}  />
          <Circle cx={this.state.children[0].cx} cy={this.state.children[0].cy} r={this.state.children[0].r} onMouseOver={this.handleMouseOver} hasChildren={false} fill={this.getColour(this.state.children[0].level)} />
          <Circle cx={this.state.children[1].cx} cy={this.state.children[1].cy} r={this.state.children[1].r} onMouseOver={this.handleMouseOver} hasChildren={false} fill={this.getColour(this.state.children[1].level)} />
          <Circle cx={this.state.children[2].cx} cy={this.state.children[2].cy} r={this.state.children[2].r} onMouseOver={this.handleMouseOver} hasChildren={false} fill={this.getColour(this.state.children[2].level)} />
          <Circle cx={this.state.children[3].cx} cy={this.state.children[3].cy} r={this.state.children[3].r} onMouseOver={this.handleMouseOver} hasChildren={false} fill={this.getColour(this.state.children[3].level)} />
        </svg>
      )
    } else return (
      <svg width={this.props.width} height={this.props.height} >
        <circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} onMouseOver={this.handleMouseOver} />
      </svg>
    )
  }

}

export default Circle
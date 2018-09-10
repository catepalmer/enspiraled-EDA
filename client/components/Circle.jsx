import React from 'react'

class Circle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      children: []
    }
    this.handleMouseOver = this.handleMouseOver.bind(this, props.circle)
    this.getColour = this.getColour.bind(this)
  }

  getColour(level){
    const colours = ['lightskyblue', 'lightseagreen', 'pink', 'lightgreen', 'lightsalmon', 'lightslategray', 'lightgoldenrodyellow']
    return colours[Math.floor(level % colours.length)]
  }

  handleMouseOver(circle) {
      let children = []
      const { cx, cy, r} = circle
      const level = circle.level + 1
      children.push(
        {cx: cx, cy: cy-r, r: r/2, level},
        {cx: cx, cy: cy+r, r: r/2, level},
        {cx: cx+r, cy: cy, r: r/2, level},
        {cx: cx-r, cy: cy, r: r/2, level},
        {cx: cx+r/2, cy: cy-r/2, r: r/2, level},
        {cx: cx-r/2, cy: cy+r/2, r: r/2, level},
        {cx: cx+r/2, cy: cy+r/2, r: r/2, level},
        {cx: cx-r/2, cy: cy-r/2, r: r/2, level}
      )
      this.setState({
        hasChildren: true,
        children
      })
  }

  render() {
    const {cx, cy, r, level} = this.props.circle
    const colour = this.getColour(level)
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} onMouseOver={this.handleMouseOver} fill={colour}/>
          {this.state.children.map((circle, i) => {
            return <Circle key={i} circle={circle}/>
          })}
        </g>
      )
    }
}

export default Circle
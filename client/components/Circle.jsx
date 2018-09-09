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
          <circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} onMouseOver={this.handleMouseOver} className={`level${this.state.level}`}  />
          <Circle cx={this.state.children[0].cx} cy={this.state.children[0].cy} r={this.state.children[0].r} onMouseOver={this.handleMouseOver} hasChildren={false} children={[]} className={`level${this.state.children[0].level}`} />
          <Circle cx={this.state.children[1].cx} cy={this.state.children[1].cy} r={this.state.children[1].r} onMouseOver={this.handleMouseOver} hasChildren={false} children={[]} className={`level${this.state.children[1].level}`} />
          <Circle cx={this.state.children[2].cx} cy={this.state.children[2].cy} r={this.state.children[2].r} onMouseOver={this.handleMouseOver} hasChildren={false} children={[]} className={`level${this.state.children[2].level}`} />
          <Circle cx={this.state.children[3].cx} cy={this.state.children[3].cy} r={this.state.children[3].r} onMouseOver={this.handleMouseOver} hasChildren={false} children={[]} className={`level${this.state.children[3].level}`} />
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






// render() {
//   if(this.state.hasChildren === true) {
//     return (
//       <svg width={this.props.width} height={this.props.height} >
//         <circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} onMouseOver={this.handleMouseOver} />
//         {this.state.children.forEach(child => {
//           <Circle cx={child.cx} cy={child.cy} r={child.r} onMouseOver={this.handleMouseOver} />
//         })}
//       </svg>
//     )
//   } else return (
//     <svg width={this.props.width} height={this.props.height} >
//       <circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} onMouseOver={this.handleMouseOver} />
//     </svg>
//   )
// }



// handleMouseOver() {
//   if (this.state.hasChildren === false) {
//     this.setState({
//       hasChildren: true,
//       children: [
//         {
//           cx: this.state.cx,
//           cy: this.state.cy - this.state.r,
//           level: this.state.level + 1,
//           r: this.state.r / 2,
//           hasChildren: false,
//           children: []
//         },
//         {
//           cx: this.state.cx + this.state.r,
//           cy: this.state.cy,
//           level: this.state.level + 1,
//           r: this.state.r / 2,
//           hasChildren: false,
//           children: []
//         },
//         {
//           cx: this.state.cx,
//           cy: this.state.cy + this.state.r,
//           level: this.state.level + 1,
//           r: this.state.r / 2,
//           hasChildren: false,
//           children: []
//         },
//         {
//           cx: this.state.cx - this.state.r,
//           cy: this.state.cy,
//           level: this.state.level + 1,
//           r: this.state.r / 2,
//           hasChildren: false,
//           children: []
//         }
//       ]
//     })
//   }
// }


// createChildren(state) {
//   let child = {
//     cx: state.cx,
//     cy: state.cy,
//     level: state.level + 1,
//     r: state.r / 2,
//     hasChildren: false,
//     children: []
//   }
//   let childrenArr = [child, child, child, child]
//   childrenArr[0].cx += state.r
//   childrenArr[1].cy += state.r
//   childrenArr[2].cx -= state.r
//   childrenArr[3].cy -= state.r
//   console.log(childrenArr)
//   return childrenArr
// }
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App width={window.innerWidth} height={window.innerHeight} level={0} r={256} />,
    document.getElementById('app')
  )
})

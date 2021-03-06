import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class FlipInYReversePage extends Component {
  render() {
    return (
      <div className="react-transition flip-in-y-reverse">
        <Page title="Flip In Y Reverse" docs={`<div className="react-transition flip-in-y-reverse"></div>`}/>
      </div>
    )
  }
}
export default FlipInYReversePage

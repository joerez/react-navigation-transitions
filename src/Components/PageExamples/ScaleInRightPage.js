import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class ScaleInRightPage extends Component {
  render() {
    return (
      <div className="react-transition scale-in-right">
        <Page title="Scale In Right" docs={`<div className="react-transition scale-in-right"></div>`}/>
      </div>
    )
  }
}
export default ScaleInRightPage

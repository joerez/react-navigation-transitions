import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class ScaleInPage extends Component {
  render() {
    return (
      <div className="react-transition scale-in">
        <Page title="Scale In" docs={`<div className="react-transition scale-in"></div>`} />
      </div>
    )
  }
}
export default ScaleInPage

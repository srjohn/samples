/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Nav from '../components/Nav'

export default class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Nav/>
        {children}
      </div>
    )
  }
}

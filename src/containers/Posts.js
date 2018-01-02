import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.handleGetPosts = this.handleGetPosts.bind(this)
  }
  handleGetPosts() {
    // this.props.dispatch('POSTS_REQUEST')
    console.log('dispatched POSTS_REQUEST', this.props)
  }
  render() {
    return (<button onClick={this.handleGetPosts}>Get posts</button>)
  }
}

export default Posts

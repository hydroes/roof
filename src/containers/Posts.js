import React from 'react'
import { connect } from 'react-redux'

const Posts = ({getPostsClick}) => {
  return <button onClick={() => getPostsClick()}>Get posts</button>
}

const mapDispatchToProps = dispatch => {
  return {
    getPostsClick: () => {
      dispatch({type: 'POSTS_REQUEST'})
      console.log('getPostsClick')
    }
  }
}

const VisiblePosts = connect(
  undefined,
  mapDispatchToProps
)(Posts)

export default VisiblePosts

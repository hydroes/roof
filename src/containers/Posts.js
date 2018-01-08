import React from 'react'
import { connect } from 'react-redux'

const Posts = ({getPostsClick}) => {
  return <button onClick={() => getPostsClick()}>Get posts</button>
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getPostsClick: () => {
      dispatch({
        type: 'POSTS_REQUEST',
        history: props.history
      })
      console.log('getPostsClick props', props)

    }
  }
}

const VisiblePosts = connect(
  undefined,
  mapDispatchToProps
)(Posts)

export default VisiblePosts

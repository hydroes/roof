import React from 'react'
import { connect } from 'react-redux'

const Posts = ({getPostsClick}) => {
  return <button onClick={() => getPostsClick()}>Get posts</button>
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getPostsClick: () => {
      dispatch({type: 'POSTS_REQUEST'})
      console.log('getPostsClick props', props)

      const location = {
        pathname: '/about',
        state: { fromDashboard: true }
      }

      props.history.push(location)
    }
  }
}

const VisiblePosts = connect(
  undefined,
  mapDispatchToProps
)(Posts)

export default VisiblePosts

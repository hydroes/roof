import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* getPostsSaga(state) {
  yield axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    console.log('Posts saga', state)
    const location = {
      pathname: '/about',
      state: { fromDashboard: true }
    }

    state.history.push(location)
    return response
  })
}

export function* watchPostsRequestSaga() {
  yield takeEvery('POSTS_REQUEST', getPostsSaga)
}

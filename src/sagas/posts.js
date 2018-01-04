import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function* getPostsSaga() {
  yield axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    console.log('Posts saga', response)
    return response
  })
}

export function* watchPostsRequestSaga() {
  yield takeEvery('POSTS_REQUEST', getPostsSaga)
}

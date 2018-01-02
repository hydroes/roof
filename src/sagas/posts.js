import axios from 'axios'

export default function* getPostsSaga() {
  yield axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    console.log('Posts saga', response)
    return response
  })
}

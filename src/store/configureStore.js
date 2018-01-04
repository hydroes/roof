import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'reducers'
import registerSagasWithMiddleware from 'sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    ...registerSagasWithMiddleware(sagaMiddleware)
  }
}

export default configureStore

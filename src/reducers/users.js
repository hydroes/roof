import * as types from '../constants/actionTypes'

export default function (state = [], action) {
  switch (action.type) {
    case types.USERS_REQUEST:
      return [...state, 'fetching users'];
    default:
      return state
  }
}

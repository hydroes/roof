import * as users from 'sagas/users'
import * as posts from 'sagas/posts'
const sagas = {
  ...users,
  ...posts
}

export default function registerWithMiddleware(middleware) {
  for (var name in sagas) {
    middleware.run(sagas[name]);
  }
}

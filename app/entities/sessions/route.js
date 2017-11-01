import { handler } from './handler'

exports = [
  {
    method: 'POST',
    path: '/api/v1/sessions',
    handler: handler.startSession
  },
  {
    method: 'PATCH',
    path: '/api/v1/session',
    handler: handler.finishSession
  }
]

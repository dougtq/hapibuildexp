import { startSession, finishSession, recoverPass } from './handler'

exports = [
  {
    method: 'POST',
    path: '/api/v1/sessions',
    handler: startSession
  },
  {
    method: 'PATCH',
    path: '/api/v1/session',
    handler: finishSession
  },
  {
    method: 'POST',
    path: '/api/v1/session',
    handler: recoverPass
  }
]

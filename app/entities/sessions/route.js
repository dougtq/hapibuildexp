import Session from './handler'

let Sessao

module.exports = [
  {
    method: 'POST',
    path: '/api/v1/sessions',
    handler: (request, reply) => {
      console.log('Teste')
      Sessao = new Session(request, reply)
      Sessao.startSession()
    }
  },
  {
    method: 'PATCH',
    path: '/api/v1/session',
    handler: (request, reply) => {
      Sessao = new Session(request, reply)
      Sessao.finishSession()
    }
  },
  {
    method: 'POST',
    path: '/api/v1/session',
    handler: (request, reply) => {
      Sessao = new Session(request, reply)
      Sessao.recoverPass()
    }
  }
]

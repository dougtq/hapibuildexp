export default class Session {
  constructor (request, reply) {
    this.request = request
    this.reply = reply
  }

  startSession () {
    console.log('Funcionou StartSession()')
  }

  finishSession () {
    console.log('Funcionou FinishSession()')
  }
  recoverPass () {
    console.log('Funcionou recoverPass()')
  }
}

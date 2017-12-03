export default class Session {
  constructor (request, reply) {
    this.request = request
    this.reply = reply
  }

  startSession () {
    console.log('Funcionou')
  }

  finishSession () {
    //
  }
  recoverPass () {
    //
  }
}

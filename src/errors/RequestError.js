export default class RequestError extends Error {
  constructor(msg) {
    super(msg)
    this.name = 'RequestError'
  }
}

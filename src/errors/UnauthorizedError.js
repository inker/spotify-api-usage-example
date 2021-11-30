export default class UnauthorizedError extends Error {
  constructor(msg) {
    super(msg)
    this.name = 'UnauthorizedError'
  }
}

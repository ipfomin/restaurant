export default class ModalStorage {
  static _instance;

  constructor () {
    if (ModalStorage._instance) {
      return ModalStorage._instance;
    }
    this.modals = []
    this.subscriptions = []
    ModalStorage._instance = this
  }

  clear () {
    this.modals.shift()
    this.handleUpdate()
  }

  open (modal) {
    this.modals.unshift(modal)
    this.handleUpdate()
  }

  clearAll () {
    this.modals = []
    this.handleUpdate()
  }

  subscribe (handler) {
    if (!handler || typeof handler !== 'function') {
      return
    }
    this.subscriptions.push(handler)
  }

  handleUpdate () {
    this.subscriptions.forEach(handler => {
      handler(this.modals)
    })
  }
}

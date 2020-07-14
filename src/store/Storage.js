export default class Storage {
  static _instance;

  constructor () {
    if (Storage._instance) {
      return Storage._instance;
    }
    this.subscriptions = {}
    Storage._instance = this
  }

  subscribe (key, handler) {
    if (!handler || typeof handler !== 'function') {
      return
    }
    if (!this.subscriptions[key]) {
      this.subscriptions[key] = []
    }
    this.subscriptions[key].push(handler)
  }

  setValue (key, value) {
    if (value) {
      localStorage.setItem(key, JSON.stringify({ value }))
      this.handleUpdate(key)
    }
  }

  getValue (key) {
    const value = localStorage.getItem(key)
    return value && JSON.parse(value).value
  }

  handleUpdate (key) {
    if (!this.subscriptions[key]) {
      return
    }
    this.subscriptions[key].forEach(handler => {
      handler(this.getValue(key))
    })
  }

}

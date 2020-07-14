import Storage from './Storage'
import ModalStorage from './ModalStorage'

export { default as UseMigration } from './migrations'
export const store = new Storage()
export const modalStorage = new ModalStorage()

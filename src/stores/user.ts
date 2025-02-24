import { defineStore } from 'pinia'

export const useEmailStore = defineStore('email', {
  state: () => {
    return { email: '' }
  },
  actions: {
    setEmail(email: string) {
      this.email = email
    },
  },
})

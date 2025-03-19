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

export const useUsernameStore = defineStore('username', {
  state: () => {
    return { username: '' }
  },
  persist: true,
  actions: {
    setUsername(username: string) {
      this.username = username
    },
  },
})

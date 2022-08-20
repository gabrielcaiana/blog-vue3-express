import { defineStore } from 'pinia'
import { NewUser, UsersState } from '../interfaces/user'

export const useUsers = defineStore("users", {
  state: (): UsersState => ({
    currentUserId: undefined
  }),

  actions: {
    async authenticate () {
      const res = await window.fetch("/api/current-user", {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await res.json()
      this.currentUserId = result.id
    },

    async createUser (newUser: NewUser) {
      const body = JSON.stringify(newUser)
      await window.fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
     })

     return this.authenticate()
    }
  }
})
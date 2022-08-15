import { defineStore } from 'pinia'
import { NewUser } from '../interfaces/user'

export const useUsers = defineStore("users", {
  actions: {
    createUser (newUser: NewUser) {
      const body = JSON.stringify(newUser)
      return window.fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
     })
    }
  }
})
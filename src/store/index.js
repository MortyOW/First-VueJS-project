import { createStore } from 'vuex'

export default createStore({
  state: {
    phonecontact: [
      {
        name : 'Adam',
        number : '0782588124'
      },
      {
        name : 'Nathan',
        number : '0601020304'
      },
      {
        name : 'Armand',
        number : '0708091011'
      },
      {
        name : 'Nicolas',
        number : '0680121314'
      },
      {
        name : 'Jérémy',
        number : '0666666666'
      },
      {
        name : 'Ambre',
        number : '0765102033'
      },
      {
        name: 'Police',
        number: '17'
      }
    ],
    callhistory: []
  },
  getters: {
  },
  mutations: {
    callnumber(state, contact){
      state.callhistory.push(contact)
    }, 
    ajoutContact(state, contact){
      state.phonecontact.push(contact)
    }
  },
  actions: {
  },
  modules: {
  }
})

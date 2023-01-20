import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'telephone',
    component: () => import('../views/TelephoneView.vue')
  },

  {
    path: '/journal',
    name: 'journal',
    component: () => import('../views/JournalView.vue')
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue')
  },

  {
    path: '/addcontacts',
    name: 'addcontacts',
    component: () => import('../views/AddContactsView.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

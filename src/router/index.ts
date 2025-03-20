import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios, { AxiosError } from 'axios'
import { AUTH_API, HTTP_STATUS } from '@/constants'

async function isAuthenticated() {
  try {
    const response = await axios.get(AUTH_API.IS_AUTHENTICATED, { withCredentials: true })
    if (response.status == HTTP_STATUS.OK) {
      return true
    }
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response?.status == HTTP_STATUS.UNAUTHORIZED) {
      return false
    }
  }
}

const authenticated = await isAuthenticated()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      beforeEnter: (to, from, next) => {
        if (authenticated) {
          next('/dashboard')
        } else {
          next()
        }
      },
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: (to, from, next) => {
        if (authenticated) {
          next('/dashboard')
        } else {
          next()
        }
      },
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/dashboard',
      beforeEnter: (to, from, next) => {
        if (authenticated) {
          next()
        } else {
          next('/login')
        }
      },
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
  ],
})

export default router

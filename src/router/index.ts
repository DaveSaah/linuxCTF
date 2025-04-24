import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteLocationNormalizedLoaded,
} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import axios, { AxiosError } from 'axios'
import { AUTH_API, HTTP_STATUS } from '@/constants'

async function isAuthenticated(): Promise<boolean> {
  try {
    const response = await axios.get(AUTH_API.IS_AUTHENTICATED, { withCredentials: true })
    if (response.status === HTTP_STATUS.OK) {
      return true
    }
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response?.status === HTTP_STATUS.UNAUTHORIZED) {
      return false
    }
  }
  return false // Ensure a boolean is always returned
}

async function requireAuth(
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext,
) {
  if (await isAuthenticated()) {
    next()
  } else {
    next('/login')
  }
}

async function redirectIfAuthenticated(
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext,
) {
  if (await isAuthenticated()) {
    next('/dashboard')
  } else {
    next()
  }
}

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
      beforeEnter: redirectIfAuthenticated,
      component: () => import('@/views/RegisterView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: redirectIfAuthenticated,
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      beforeEnter: requireAuth,
      component: () => import('@/views/DashboardView.vue'),
      redirect: '/learning-paths',
      children: [
        {
          path: '/learning-paths',
          name: 'learning-paths',
          beforeEnter: requireAuth,
          component: () => import('@/views/LearningPathsView.vue'),
        },
        {
          path: '/challenges',
          name: 'challenges',
          beforeEnter: requireAuth,
          component: () => import('@/views/ChallengesView.vue'),
        },
        {
          path: '/achievements',
          name: 'achievements',
          beforeEnter: requireAuth,
          component: () => import('@/views/AchievementsView.vue'),
        },
        {
          path: '/challenge/:id',
          name: 'challenge',
          beforeEnter: requireAuth,
          component: () => import('@/views/ChallengeView.vue'),
        },
      ],
    },
  ],
})

export default router

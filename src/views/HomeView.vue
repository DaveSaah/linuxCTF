<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useEmailStore } from '@/stores/user'
import { ref } from 'vue'

const emailStore = useEmailStore()
const email = ref('')
</script>

<template>
  <div class="flex min-h-screen flex-col lato-regular">
    <!-- Hero section -->
    <section class="relative overflow-hidden bg-black py-32 text-white">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
      <div class="absolute inset-0 opacity-30 bg-custom"></div>
      <div class="relative flex justify-center items-center">
        <div class="max-w-3xl text-center">
          <h1 class="mb-6 font-bold tracking-tight text-6xl">
            From Confused to Confident
            <span class="text-green-400"> Linux Made Easy</span>
          </h1>
          <p class="text-gray-300 text-xl py-8">
            Master Linux fundamentals with interactive CTF challenges. Practice in real environments
            and advance your skills step by step.
          </p>
          <div class="flex items-center gap-4 flex-row justify-center">
            <RouterLink to="/register">
              <button
                class="flex bg-green-500 hover:bg-green-600 py-2 px-5 rounded-md items-center cursor-pointer gap-x-2"
              >
                Get Started
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
              </button>
            </RouterLink>
            <button
              class="flex items-center border py-2 px-5 rounded-md gap-x-2 border-gray-600 text-white hover:bg-gray-800 hover:text-white w-auto cursor-pointer"
            >
              View Challenges
              <font-awesome-icon :icon="['fas', 'up-right-from-square']" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="px-4 py-16">
      <h2 class="text-4xl font-bold text-center py-4">Why Choose Our Platform?</h2>
      <div class="grid gap-8 grid-cols-4">
        <div class="border-2 p-4 rounded-lg border-gray-200 shadow hover:border-green-500">
          <font-awesome-icon class="text-green-500 icon" :icon="['fas', 'terminal']" />
          <h3>Secure Terminal Access</h3>
          <p class="subtitle">
            Practice safely in real Linux environments with full command-line control.
          </p>
        </div>
        <div class="border-2 p-4 rounded-lg border-gray-200 shadow hover:border-green-500">
          <font-awesome-icon class="text-green-500 icon" :icon="['fas', 'puzzle-piece']" />
          <h3>Scenario-Based Challenges</h3>
          <p class="subtitle">
            Solve real-world tasks relevant to cloud computing, DevOps, and software engineering
            roles.
          </p>
        </div>
        <div class="border-2 p-4 rounded-lg border-gray-200 shadow hover:border-green-500">
          <font-awesome-icon class="text-green-500 icon" :icon="['fas', 'chart-line']" />
          <h3>Comprehensive Progress Tracking</h3>
          <p class="subtitle">Monitor skill growth with detailed reports</p>
        </div>
        <div class="border-2 p-4 rounded-lg border-gray-200 shadow hover:border-green-500">
          <font-awesome-icon class="text-green-500 icon" :icon="['fas', 'comments']" />
          <h3>Guided Feedback & Hints</h3>
          <p class="subtitle">
            Receive instant feedback with hints to support learning cycles and problem-solving.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-green-500 py-20 text-white">
      <div class="flex flex-col text-center">
        <h2 class="mb-6 text-4xl font-bold">Ready to Start Your Linux Journey?</h2>
        <p class="mb-8 text-lg py-6">
          Join other learners mastering Linux through practical challenges.
        </p>
        <div class="flex items-center gap-4 flex-row justify-center">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="h-12 w-1/4 px-4 rounded-md bg-white/10 text-white placeholder:text-white/70"
          />
          <RouterLink to="/register">
            <button
              @click="emailStore.setEmail(email)"
              class="bg-black hover:bg-gray-900 py-2 h-12 rounded-md px-3 cursor-pointer"
            >
              Sign Up Now
            </button>
          </RouterLink>
        </div>
        <p class="mt-4 text-sm text-white/80 py-4">Free account. No credit card required.</p>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20">
      <div class="grid gap-8 text-center grid-cols-3">
        <div>
          <div class="mb-2 flex items-center justify-center">
            <font-awesome-icon class="text-3xl py-1 text-green-500" :icon="['fas', 'users']" />
          </div>
          <h3 class="text-3xl font-bold">10,000+</h3>
          <p class="text-gray-600">Active Learners</p>
        </div>
        <div>
          <div class="mb-2 flex items-center justify-center">
            <font-awesome-icon class="text-green-500 py-1 text-3xl" :icon="['fas', 'terminal']" />
          </div>
          <h3 class="text-3xl font-bold">500+</h3>
          <p class="text-gray-600">Challenges</p>
        </div>
        <div>
          <div class="mb-2 flex items-center justify-center">
            <font-awesome-icon class="text-green-500 py-1 text-3xl" :icon="['fas', 'stopwatch']" />
          </div>
          <h3 class="text-3xl font-bold">24/7</h3>
          <p class="text-gray-600">Platform Availability</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="css" scoped>
.icon {
  font-size: 48px;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}

h3 {
  font-weight: bold;
  font-size: 1.5rem;
}

.subtitle {
  color: #6c757d;
  line-height: 1.25rem;
}
</style>

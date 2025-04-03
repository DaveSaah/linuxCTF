<script setup lang="ts">
import { useEmailStore } from '@/stores/user'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  ChevronRight,
  SquareArrowOutUpRight,
  Terminal,
  Puzzle,
  ChartLine,
  MessagesSquare,
  Users,
  Timer,
} from 'lucide-vue-next'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const emailStore = useEmailStore()
const email = ref('')

const features = [
  {
    icon: Terminal,
    title: 'Secure Terminal Access',
    description: 'Practice safely in real Linux environments with full command-line control.',
  },
  {
    icon: Puzzle,
    title: 'Scenario-Based Challenges',
    description:
      'Solve real-world tasks relevant to cloud computing, DevOps, and software engineering roles.',
  },
  {
    icon: ChartLine,
    title: 'Comprehensive Progress Tracking',
    description: 'Monitor skill growth with detailed reports',
  },
  {
    icon: MessagesSquare,
    title: 'Guided Feedback & Hints',
    description:
      'Receive instant feedback with hints to support learning cycles and problem-solving.',
  },
]
</script>

<template>
  <div class="flex min-h-screen flex-col">
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
              <Button class="bg-green-500 cursor-pointer hover:bg-green-700" size="lg"
                >Get Started <ChevronRight
              /></Button>
            </RouterLink>
            <Button
              variant="ghost"
              size="lg"
              class="hover:bg-gray-800 hover:text-white cursor-pointer border border-gray-500"
              >View Challenges <SquareArrowOutUpRight
            /></Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="px-4 py-16">
      <h2 class="text-4xl font-bold text-center py-4">Why Choose Our Platform?</h2>
      <div class="grid gap-4 grid-cols-2">
        <Card v-for="feature in features" :key="feature.title" class="hover:border-green-500">
          <CardHeader>
            <CardTitle>
              <component :is="feature.icon" class="w-12 h-12 text-green-500" />
              <h3 class="pt-2">{{ feature.title }}</h3>
            </CardTitle>
            <CardDescription>
              <p>{{ feature.description }}</p>
            </CardDescription>
          </CardHeader>
        </Card>
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
          <Input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-1/4 bg-white/10 placeholder:text-white/70"
          />
          <RouterLink to="/register">
            <Button
              @click="emailStore.setEmail(email)"
              size="lg"
              class="hover:bg-black cursor-pointer"
            >
              Sign Up Now
            </Button>
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
            <Users class="text-green-500 w-10 h-10" />
          </div>
          <h3 class="text-3xl font-bold">10,000+</h3>
          <p class="text-gray-600">Active Learners</p>
        </div>
        <div>
          <div class="mb-2 flex items-center justify-center">
            <Terminal class="text-green-500 w-10 h-10" />
          </div>
          <h3 class="text-3xl font-bold">500+</h3>
          <p class="text-gray-600">Challenges</p>
        </div>
        <div>
          <div class="mb-2 flex items-center justify-center">
            <Timer class="text-green-500 w-10 h-10" />
          </div>
          <h3 class="text-3xl font-bold">24/7</h3>
          <p class="text-gray-600">Platform Availability</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="css" scoped>
h3 {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>

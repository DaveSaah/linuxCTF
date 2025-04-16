<script setup lang="ts">
import { Code, Server, Terminal, ChevronRight } from 'lucide-vue-next'
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

// Challenge nicknames
// 1 - Newbie – just getting started
// 2 - Apprentice – learning the ropes
// 3 - Adept – growing in skill
// 4 - Seer – gaining insight
// 5 - Invoker – can conjure clever solutions
// 6 - Spellbreaker – cracks tough problems
// 7 - Shadowmancer – thrives in the dark corners of the system
// 8 - Wizard – commands power with precision
// 9 - Architect – builds systems with mastery
// 10 - Rootmaster – total control, deep understanding

// status options = ['Completed', 'In Progress', 'Locked']
const learningPath = [
  { id: 1, name: 'Command Line Basics', status: 'In Progress' },
  { id: 2, name: 'File System Navigation', status: 'Locked' },
  { id: 3, name: 'User Management & Permissions', status: 'Locked' },
  { id: 4, name: 'Networking Fundamentals', status: 'Locked' },
  { id: 5, name: 'Shell Scripting', status: 'Locked' },
]

const overallProgress = 10 // solved/total * 100%

// all skill level have 3 recommended challenges
const recommendedChallenges = [
  {
    title: 'Permission Puzzle',
    description: 'Fix file permissions to access a hidden flag',
    icon: Code,
  },
  {
    title: 'Process Detective',
    description: 'Identify and manage system processes',
    icon: Server,
  },
  {
    title: 'Regex Ranger',
    description: 'Use grep and regex to find hidden messages',
    icon: Terminal,
  },
]
</script>

<template>
  <header class="flex flex-col pb-10">
    <h1 class="font-bold text-3xl">Learning Paths</h1>
    <p class="text-gray-500">Explore structured learning paths to master Linux skills</p>
  </header>
  <div class="bg-gradient-to-r from-gray-300 to-white p-5 rounded-lg">
    <div class="flex justify-between">
      <div class="flex flex-col">
        <h1 class="capitalize font-bold text-xl">your learning journey</h1>
        <p class="font-light text-gray-600">
          Track your progress through all Linux learning paths.
        </p>
      </div>
      <div>
        <Badge variant="secondary" class="font-bold border shadow-xl text-sm">2/20 modules completed</Badge>
      </div>
    </div>

    <div class="flex justify-between items-center py-4">
      <div class="flex justify-between w-3/4">
        <div class="text-sm font-medium">Overall Progress</div>
        <div class="text-sm font-medium">{{ overallProgress }}%</div>
      </div>
      <div class="flex gap-x-5 justify-start items-center">
        <div class="flex justify-center items-center gap-x-2">
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="7" fill="green" />
          </svg>
          Completed (2)
        </div>
        <div class="flex justify-center items-center gap-x-2">
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="7" fill="yellow" />
          </svg>
          Todo (4)
        </div>
      </div>
    </div>
    <div class="w-3/4">
      <Progress v-model="overallProgress" class="h-3" />
      <!-- <Progress v-model="overallProgress" class="h-2" color="bg-blue-500" /> -->
    </div>
  </div>
  <div class="flex gap-x-6 py-12">
    <Card class="w-1/2">
      <CardHeader>
        <CardTitle>Your Learning Journey</CardTitle>
        <CardDescription>Track your progress through the Linux mastery path</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div
            v-for="item in learningPath"
            :key="item.id"
            class="flex items-center justify-between py-3"
          >
            <div class="flex items-center">
              <div
                class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-3 text-sm font-medium"
              >
                {{ item.id }}
              </div>
              <span class="font-medium px-3" :class="{ 'text-gray-500': item.status === 'Locked' }">
                {{ item.name }}
              </span>
            </div>
            <div>
              <span
                class="px-3 py-1 rounded-full text-xs font-bold"
                :class="{
                  'bg-green-100 text-green-800': item.status === 'Completed',
                  'bg-yellow-100 text-yellow-800': item.status === 'In Progress',
                  'text-gray-500 border border-gray-300': item.status === 'Locked',
                }"
              >
                {{ item.status }}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card class="w-1/2">
      <CardHeader>
        <CardTitle>Recommended Challenges</CardTitle>
        <CardDescription>Based on your current skill level</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div
            v-for="challenge in recommendedChallenges"
            :key="challenge.title"
            class="flex justify-between items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center">
                <component :is="challenge.icon" />
              </div>
              <div class="px-4">
                <div class="font-medium">{{ challenge.title }}</div>
                <div class="text-sm text-gray-500">{{ challenge.description }}</div>
              </div>
            </div>
            <ChevronRight />
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardAction,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trophy } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const challenges = [
  {
    id: 101,
    title: 'Anatomy of the command line',
    level: 'newbie',
    points: 50,
    status: 'todo',
    description: 'Understand the structure of the command line.',
  },
  {
    id: 108,
    title: 'Say Hello',
    level: 'newbie',
    points: 50,
    status: 'todo',
    description: 'Say Hello to the world!',
  },
  {
    id: 102,
    title: 'File Permissions Deep Dive',
    level: 'beginner',
    points: 150,
    status: 'todo',
    description: 'Master file permissions with chmod and chown.',
  },
  {
    id: 103,
    title: 'Networking Basics',
    level: 'newbie',
    points: 120,
    status: 'in-progress',
    description: 'Explore basic Linux networking commands.',
  },
  {
    id: 104,
    title: 'Process Management',
    level: 'intermediate',
    points: 200,
    status: 'todo',
    description: 'Learn to manage processes using ps, top, and kill.',
  },
]
</script>

<template>
  <header class="flex justify-between items-center pb-10">
    <div>
      <h1 class="font-bold text-3xl">Challenges</h1>
      <p class="text-gray-500">Explore and solve Linux challenges to improve your skills</p>
    </div>
    <a
      class="flex gap-x-5 items-center border py-1 px-2 rounded-md border-gray-300 text-sm hover:bg-gray-100 cursor-pointer"
      href=""
      target="_blank"
    >
      <Trophy class="w-4 h-4" />
      My Submissions
    </a>
  </header>

  <Tabs default-value="all" class="w-full">
    <TabsList class="grid w-1/2 grid-cols-3">
      <TabsTrigger value="all" class="cursor-pointer"> All Challenges </TabsTrigger>
      <TabsTrigger value="current" class="cursor-pointer"> Current Level (3) </TabsTrigger>
      <TabsTrigger value="completed" class="cursor-pointer"> Completed (10) </TabsTrigger>
    </TabsList>

    <TabsContent value="all">
      <div class="grid grid-cols-4 w-full gap-5">
        <Card v-for="challenge in challenges" :key="challenge.id">
          <CardHeader>
            <CardTitle class="flex items-center justify-between">
              <div>
                <h1 class="capitalize text-lg">{{ challenge.title }}</h1>
                <div class="flex items-center gap-x-2 pt-2">
                  <Badge class="font-bold text-green-800 bg-green-100 text-sm">{{
                    challenge.level
                  }}</Badge>
                  <p class="text-gray-400 font-light">{{ challenge.points }} points</p>
                </div>
              </div>
              <Badge class="font-bold text-amber-800 bg-amber-100 text-sm">{{
                challenge.status
              }}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-500 font-light tracking-tight">
              {{ challenge.description }}
            </p>
          </CardContent>
          <CardFooter class="border-t">
            <CardAction class="flex justify-between w-full items-center">
              <Badge variant="outline">{{ challenge.id }}</Badge>
              <RouterLink :to="`/challenge/${challenge.id}`">
                <Button variant="default" class="cursor-pointer">Start Challenge</Button>
              </RouterLink>
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </TabsContent>

    <TabsContent value="current"> </TabsContent>
    <TabsContent value="completed"> </TabsContent>
  </Tabs>
</template>

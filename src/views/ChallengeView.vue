<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, Terminal } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const showTerminal = ref(false)

function toggleTerminal() {
  showTerminal.value = !showTerminal.value
}

type Challenge = {
  id: number
  title: string
  level: string
  points: number
  status: string
  description: string
}

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

const route = useRoute()
const challengeId = ref(Number(route.params.id))
const challenge = ref<Challenge | null>(null)

onMounted(() => {
  challenge.value = challenges.find((c) => c.id === challengeId.value) || null
})
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <RouterLink to="/challenges">Challenges</RouterLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem v-if="challenge">
        <BreadcrumbPage>{{ challenge.id }}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
  <div v-if="challenge" class="w-full mx-auto p-5">
    <div class="flex items-center gap-x-2 pb-6">
      <h1 class="text-3xl font-bold">{{ challenge.title }}</h1>
      <Badge class="font-bold text-green-800 bg-green-100 text-sm">
        {{ challenge.level }}
      </Badge>
    </div>
    <div class="flex w-full gap-4">
      <Card class="p-5 rounded-md grow">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold">Challenge Details</CardTitle>
          <CardDescription>{{ challenge.points }} points</CardDescription>
        </CardHeader>
        <CardContent>{{ challenge.description }}</CardContent>
        <CardFooter class="flex">
          <Button variant="outline" class="cursor-pointer" @click="toggleTerminal">
            <Terminal /> {{ showTerminal ? 'Close' : 'Open' }} Terminal
          </Button>
        </CardFooter>
      </Card>
      <Card class="w-1/3">
        <CardHeader>
          <CardTitle class="text-2xl font-semibold flex gap-x-2"><Lightbulb />Hints</CardTitle>
          <CardContent>
            <Accordion collapsible>
              <AccordionItem value="hint-1">
                <AccordionTrigger>
                  <div class="flex gap-x-3 text-lg font-semibold no-underline">
                    <Lightbulb class="text-yellow-500" />Hint 1
                  </div>
                </AccordionTrigger>
                <AccordionContent>Who are you?</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion collapsible>
              <AccordionItem value="hint-2">
                <AccordionTrigger>
                  <div class="flex gap-x-3 text-lg font-semibold no-underline">
                    <Lightbulb class="text-yellow-500" />Hint 2
                  </div>
                </AccordionTrigger>
                <AccordionContent>Who are you?</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion collapsible>
              <AccordionItem value="hint-3">
                <AccordionTrigger>
                  <div class="flex gap-x-3 text-lg font-semibold no-underline">
                    <Lightbulb class="text-yellow-500" />Hint 3
                  </div>
                </AccordionTrigger>
                <AccordionContent>Who are you?</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
    <div class="h-4"></div>
    <Card v-if="showTerminal" class="bg-black text-white mt-6">
      <CardHeader>
        <CardTitle class="text-2xl font-semibold flex gap-x-2 items-center">
          <Terminal />Challenge Terminal
        </CardTitle>
        <CardDescription class="fira-code text-white antialiased py-8">
          Welcome to the Linux CTF Challenge Terminal<br />
          Type 'help' to see available commands
        </CardDescription>
      </CardHeader>
      <CardContent class="h-1/2"></CardContent>
      <CardFooter class="border-t flex items-center pt-2 fira-code text-sm">
        <span class="px-2 text-green-500">$</span>
        <input
          class="border-none bg-transparent fira-code focus:ring-0 focus:outline-none placeholder-gray-600 w-full"
          placeholder="Type your command here..."
        />
      </CardFooter>
    </Card>
  </div>
  <div v-else class="text-center py-10">
    <p class="text-xl text-gray-600">Challenge not found</p>
  </div>
</template>

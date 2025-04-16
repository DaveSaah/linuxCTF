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
</script>

<template>
  <div class="flex justify-between items-center pb-10">
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
  </div>
  <!-- search functionality for future  -->
  <Tabs default-value="all" class="w-full">
    <TabsList class="grid w-1/2 grid-cols-3">
      <TabsTrigger value="all" class="cursor-pointer"> All Challenges </TabsTrigger>
      <TabsTrigger value="current" class="cursor-pointer"> Current Level (3) </TabsTrigger>
      <!-- number of challenges left to do in current level --->
      <TabsTrigger value="completed" class="cursor-pointer"> Completed (10) </TabsTrigger>
    </TabsList>

    <TabsContent value="all">
      <div class="grid grid-cols-4 w-full gap-5">
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center justify-between">
              <div>
                <h1 class="capitalize text-lg">Anatomy of the command line</h1>
                <div class="flex items-center gap-x-2 pt-2">
                  <Badge class="font-bold text-green-800 bg-green-100 text-sm">newbie</Badge>
                  <p class="text-gray-400 font-light">100 points</p>
                </div>
              </div>
              <Badge class="font-bold text-amber-800 bg-amber-100 text-sm">todo</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-500 font-light tracking-tight">
              Understand the structure of the command line.
            </p>
          </CardContent>
          <CardFooter class="border-t">
            <CardAction class="flex justify-between w-full items-center">
              <Badge variant="outline">101</Badge>
              <Button variant="default" class="cursor-pointer">Start Challenge</Button>
            </CardAction>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center justify-between">
              <div>
                <h1 class="capitalize text-lg">Anatomy of the command line</h1>
                <div class="flex items-center gap-x-2 pt-2">
                  <Badge class="font-bold text-green-800 bg-green-100 text-sm">newbie</Badge>
                  <p class="text-gray-400 font-light">100 points</p>
                </div>
              </div>
              <Badge class="font-bold text-amber-800 bg-amber-100 text-sm">todo</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-500 font-light tracking-tight">
              Understand the structure of the command line.
            </p>
          </CardContent>
          <CardFooter class="border-t">
            <CardAction class="flex justify-between w-full items-center">
              <Badge variant="outline">101</Badge>
              <Button variant="default" class="cursor-pointer">Start Challenge</Button>
            </CardAction>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center justify-between">
              <div>
                <h1 class="capitalize text-lg">Anatomy of the command line</h1>
                <div class="flex items-center gap-x-2 pt-2">
                  <Badge class="font-bold text-green-800 bg-green-100 text-sm">newbie</Badge>
                  <p class="text-gray-400 font-light">100 points</p>
                </div>
              </div>
              <Badge class="font-bold text-amber-800 bg-amber-100 text-sm">todo</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-500 font-light tracking-tight">
              Understand the structure of the command line.
            </p>
          </CardContent>
          <CardFooter class="border-t">
            <CardAction class="flex justify-between w-full items-center">
              <Badge variant="outline">101</Badge>
              <Button variant="default" class="cursor-pointer">Start Challenge</Button>
            </CardAction>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center justify-between">
              <div>
                <h1 class="capitalize text-lg">Anatomy of the command line</h1>
                <div class="flex items-center gap-x-2 pt-2">
                  <Badge class="font-bold text-green-800 bg-green-100 text-sm">newbie</Badge>
                  <p class="text-gray-400 font-light">100 points</p>
                </div>
              </div>
              <Badge class="font-bold text-amber-800 bg-amber-100 text-sm">todo</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-500 font-light tracking-tight">
              Understand the structure of the command line.
            </p>
          </CardContent>
          <CardFooter class="border-t">
            <CardAction class="flex justify-between w-full items-center">
              <Badge variant="outline">101</Badge>
              <Button variant="default" class="cursor-pointer">Start Challenge</Button>
            </CardAction>
          </CardFooter>
        </Card>
      </div>
    </TabsContent>

    <TabsContent value="current"> </TabsContent>

    <TabsContent value="completed"> </TabsContent>
  </Tabs>
</template>

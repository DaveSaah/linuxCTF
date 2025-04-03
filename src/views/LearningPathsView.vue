<script setup lang="ts">
import InfoCard from '@/components/InfoCard.vue'
import { Flag, Trophy, Award } from 'lucide-vue-next'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const infos = {
  completedChallenges: {
    title: 'Completed Challenges',
    content: '12/18',
    icon: Flag,
    subtitle: '+2 from last week',
  },
  currentLevel2: {
    title: 'Current Level',
    content: 'Level 2',
    icon: Trophy,
    subtitle: '3 challenges to level 3',
  },
  learningStreak: {
    title: 'Learning Streak',
    content: '7 days',
    icon: Award,
    subtitle: 'Keep it up!',
  },
}
</script>

<template>
  <div class="flex justify-center gap-x-4">
    <InfoCard
      v-for="info in infos"
      :key="info.title"
      :title="info.title"
      :content="info.content"
      :icon="info.icon"
      :subtitle="info.subtitle"
    />
  </div>
  <div class="flex gap-x-6 py-12">
    <Card class="w-3/5">
      <CardHeader>
        <CardTitle> Your Learning Journey </CardTitle>
        <CardDescription>Track your progress through the linux mastery path</CardDescription>
      </CardHeader>
    </Card>
    <Card class="w-3/5">
      <CardHeader>
        <CardTitle> Recommended Challenges </CardTitle>
        <CardDescription>Based on your current skill level</CardDescription>
      </CardHeader>
    </Card>
  </div>
</template>

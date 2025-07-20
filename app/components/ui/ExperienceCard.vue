<script setup lang="ts">
import Card from '@/components/ui/Card.vue';

export interface ExperienceCardItem {
  title: string;
  subtitle: string;
  period: string;
}

type Props = ExperienceCardItem;

defineProps<Props>();
</script>

<template>
  <Card>
    <div class="flex justify-between">
      <div>
        <h3 class="font-bold">{{ title }}</h3>
        <span class="text-sm text-gray-500">{{ subtitle }}</span>
      </div>
      <span class="text-gray-500">{{ period }}</span>
    </div>
  </Card>
</template>

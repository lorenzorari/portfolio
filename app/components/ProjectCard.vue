<script setup lang="ts">
import Card from '~/components/ui/Card.vue';

interface Props {
  title: string;
  description: string;
  svgIcon: string;
}

defineProps<Props>();
</script>

<template>
  <Card class="group">
    <div class="mb-2.5 size-8 grayscale-100 transition-all group-hover:grayscale-0">
      <component :is="svgIcon" />
    </div>
    <h3 class="mb-2.5 font-bold">{{ title }}</h3>
    <p class="text-sm text-gray-500">
      {{ description }}
    </p>
  </Card>
</template>

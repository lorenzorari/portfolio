<script setup lang="ts">
import Card from '@/components/ui/Card.vue';

interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <Card>
    <h3 class="mb-2.5 font-bold">{{ title }}</h3>
    <p class="text-sm text-gray-500">
      <slot />
    </p>
  </Card>
</template>

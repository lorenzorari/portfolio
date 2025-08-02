<script setup lang="ts">
import Card from '~/components/ui/Card.vue';

interface Props {
  title: string;
  description: string;
  svgIcon: object;
}

defineProps<Props>();
</script>

<template>
  <Card class="group">
    <div class="mb-2.5 size-8 transition-all">
      <component :is="svgIcon" class="group-[&:not(:hover)]:fill-muted-foreground transition-all" />
    </div>
    <h3 class="mb-2.5 font-bold">{{ title }}</h3>
    <p class="text-muted-foreground text-sm">
      {{ description }}
    </p>
  </Card>
</template>

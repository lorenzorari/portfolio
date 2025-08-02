<script setup lang="ts">
import Card from '~/components/ui/Card.vue';

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
        <span class="text-muted-foreground text-sm">{{ subtitle }}</span>
      </div>
      <span class="text-muted-foreground">{{ period }}</span>
    </div>
  </Card>
</template>

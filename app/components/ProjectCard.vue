<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';
import Card from '~/components/ui/Card.vue';

interface Props {
  title: string;
  description: string;
  svgIcon: object;
  link: string;
}

defineProps<Props>();
</script>

<template>
  <a :href="link" target="_blank">
    <Card class="group relative">
      <ArrowUpRight class="absolute top-5 right-5 size-4 opacity-0 transition-all group-hover:opacity-100" />
      <div class="mb-2.5 size-8 transition-all">
        <component :is="svgIcon" class="group-[&:not(:hover)]:fill-muted-foreground transition-all" />
      </div>
      <h3 class="mb-2.5 font-bold">{{ title }}</h3>
      <p class="text-muted-foreground text-sm">
        {{ description }}
      </p>
    </Card>
  </a>
</template>

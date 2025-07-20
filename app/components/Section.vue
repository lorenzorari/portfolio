<script setup lang="ts">
import { cn } from '~/lib/utils';

interface Props {
  title: string;
}

defineProps<Props>();

const rawAttrs = useAttrs();

const attrs = computed(() => {
  const { class: className, ...rest } = rawAttrs;

  return {
    className: className as string,
    rest,
  };
});
</script>

<template>
  <section :class="cn('mb-10', attrs.className)">
    <h2 class="mb-5 text-xl font-bold"><span class="text-primary">/</span> {{ title }}</h2>
    <slot />
  </section>
</template>

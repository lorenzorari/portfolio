<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <article class="rounded-xl border border-gray-200 p-5 transition-all hover:border-black">
    <h3 class="mb-2.5 font-bold">{{ title }}</h3>
    <p class="text-sm text-gray-500">
      <slot />
    </p>
  </article>
</template>

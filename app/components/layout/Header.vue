<script setup lang="ts">
import ThemeSwitcher from '~/components/ThemeSwitcher.vue';
</script>

<template>
  <header class="mx-auto mb-10 flex max-w-[600px] justify-between py-4">
    <h1 class="text-2xl font-bold italic">LF<span class="text-primary">.</span></h1>
    <div>
      <ThemeSwitcher />
    </div>
  </header>
</template>

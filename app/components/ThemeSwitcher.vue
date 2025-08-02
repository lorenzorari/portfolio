<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';

const colorMode = useColorMode();

const toggleTheme = (): void => {
  const themes = ['light', 'dark'];

  const currentIndex = themes.indexOf(colorMode.preference);
  const nextIndex = (currentIndex + 1) % themes.length;
  colorMode.preference = themes[nextIndex]!;
};
</script>

<template>
  <button
    class="hover:bg-muted text-muted-foreground rounded-md p-2 transition-all hover:text-black dark:hover:text-white"
    @click="toggleTheme"
  >
    <Moon v-if="$colorMode.preference === 'dark'" class="size-4" />
    <Sun v-else-if="$colorMode.preference === 'light'" class="size-4" />
  </button>
</template>

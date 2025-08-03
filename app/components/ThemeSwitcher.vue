<script setup lang="ts">
import { Moon, Sun, SunMoon } from 'lucide-vue-next';

const colorMode = useColorMode();

const isDark = computed(
  () => colorMode.preference === 'dark' || (colorMode.preference === 'system' && colorMode.value === 'dark'),
);
const isLight = computed(
  () => colorMode.preference === 'light' || (colorMode.preference === 'system' && colorMode.value === 'light'),
);

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
    <ClientOnly>
      <template #fallback>
        <SunMoon class="size-4" />
      </template>
      <Moon v-if="isDark" class="size-4" />
      <Sun v-else-if="isLight" class="size-4" />
    </ClientOnly>
  </button>
</template>

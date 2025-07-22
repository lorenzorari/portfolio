<script setup lang="ts">
import { Primitive, type PrimitiveProps } from '@maas/vue-primitive';

type ButtonVariant = 'default';

interface Props extends PrimitiveProps {
  variant?: ButtonVariant;
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  as: 'button',
  externalLink: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-1 transition-colors hover:bg-black hover:text-white"
  >
    <slot />
  </Primitive>
</template>

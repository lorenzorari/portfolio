<script setup lang="ts">
import Section from '@/components/Section.vue';
import { cn } from './lib/utils';
import ProjectCard from './components/ProjectCard.vue';

useHead({
  title: 'Lorenzo Ferrari',
});
</script>

<template>
  <header class="mx-auto mb-10 max-w-[600px] py-4">
    <h1 class="text-2xl font-bold italic">LF<span class="text-primary">.</span></h1>
  </header>
  <main>
    <div class="mx-auto max-w-[600px]">
      <Section title="introduction">
        <p class="text-gray-500">
          I'm a frontend developer from Belgium. I like building solid, easy-to-use web interfaces and working on side
          projects to try new ideas. Right now I work as a consultant and keep learning on the side.
        </p>
      </Section>
      <Section title="projects">
        <div class="grid grid-cols-2 gap-3">
          <ProjectCard title="Pocketex">
            Built a mini Pokédex in React using the PokéAPI, displaying each Pokémon’s descriptions, evolutions, and
            stats.
          </ProjectCard>
        </div>
      </Section>
    </div>
  </main>
</template>

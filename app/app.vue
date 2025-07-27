<script setup lang="ts">
import Section from '~/components/Section.vue';
import ProjectCard from '~/components/ProjectCard.vue';
import ExperienceCard from '~/components/ui/ExperienceCard.vue';
import { experiences } from '~/data/experience';
import Button from './components/ui/Button.vue';
import { ArrowUpRight } from 'lucide-vue-next';
import { projectCards } from '~/data/projects';
import { connectButtons } from '~/data/connect';

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
          <ProjectCard
            v-for="project in projectCards"
            :key="project.title"
            :title="project.title"
            :svg-icon="project.svgIcon"
            :description="project.description"
          />
        </div>
      </Section>
      <Section title="experience">
        <div class="flex flex-col gap-3">
          <ExperienceCard v-for="experience in experiences" :key="experience.title" :="experience" />
        </div>
      </Section>
      <Section title="connect">
        <div class="flex gap-2">
          <template v-for="button in connectButtons" :key="button.label">
            <Button as-child>
              <a :href="button.href" :target="button.externalLink ? '_blank' : undefined">
                {{ button.label }}
                <ArrowUpRight v-if="button.externalLink" :size="16" />
              </a>
            </Button>
          </template>
        </div>
      </Section>
    </div>
  </main>
</template>

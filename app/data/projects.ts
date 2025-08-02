import type ProjectCard from '~/components/ProjectCard.vue';
import type { ComponentProps } from '~/types/utils';
import Logo from '~~/public/images/projects/pocketex-logo.svg';

export const projectCards: ComponentProps<typeof ProjectCard>[] = [
  {
    title: 'Pocketex',
    svgIcon: Logo as unknown as object,
    description: `Built a mini Pokédex in React using the PokéAPI, displaying each Pokémon's descriptions, evolutions, and stats.`,
  },
];

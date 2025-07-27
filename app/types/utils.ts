import type { ComponentInstance } from 'vue';

export type ComponentProps<T extends Component> = ComponentInstance<T>['$props'];

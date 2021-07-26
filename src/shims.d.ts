declare module '*.vue' {
   import type { DefineComponent } from 'vue';

   const component: DefineComponent<
   Record<string, unknown>,
   Record<string, unknown>,
   unknown
   >;
   export default component;
}

declare module '*.md' {
   import { ComponentOptions } from 'vue';

   const Component: ComponentOptions;
   export default Component;
}

// Modules
declare module '@windicss/plugin-scrollbar';
declare module '@windicss/plugin-heropatterns';

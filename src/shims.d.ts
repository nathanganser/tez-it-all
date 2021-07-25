declare module '*.vue' {
   import type { DefineComponent } from 'vue';

   const component: DefineComponent<
   Record<string, unknown>,
   Record<string, unknown>,
   unknown
   >;
   export default component;
}

// Modules
declare module '@windicss/plugin-scrollbar';
declare module '@windicss/plugin-heropatterns';

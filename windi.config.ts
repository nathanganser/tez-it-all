import { defineConfig } from 'windicss/helpers';
import pluginScrollbar from '@windicss/plugin-scrollbar';
import pluginHeroPatterns from '@windicss/plugin-heropatterns';

export default defineConfig({
   darkMode: false,

   theme: {
      fontFamily: {
         sans: ['Inter', 'Roboto', 'sans-serif']
      },

      extend: {
         colors: {
            accent: '#536aff'
         },

         textColor: {
            default: '#202020',
            'default-light': '#454545',

            inverse: '#fff'
         },

         backgroundColor: {
            default: '#f8f6f5',
            'default-elevated': '#fff',
            inverse: '#000'
         }
      }
   },

   plugins: [
      pluginScrollbar,
      pluginHeroPatterns({
         patterns: ['hideout'],
         colors: {
            default: '#000'
         },
         opacity: {
            default: '0.087'
         }
      })
   ]
});

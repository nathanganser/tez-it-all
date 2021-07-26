<template>
   <div class="navbar-link-faq">
      <a class="navbar-link-faq-button" @click="showModal(true)"> FAQ </a>

      <transition name="fade">
         <div v-if="isActive" class="modal-wrapper">
            <div class="modal-wrapper-overlay" @click="showModal(false)" />
            <div class="modal-wrapper-content">
               <FaqMD />
            </div>
         </div>
      </transition>
   </div>
</template>

<style lang="postcss">
.navbar-link-faq {
   @apply relative z-11;

   &-button {
      @apply cursor-pointer;
   }

   .modal-wrapper {
      @apply sm:relative;

      &-overlay {
         @apply fixed inset-0 -z-1
         bg-black/20;
      }

      &-content {
         @apply px-8 py-6 w-640px max-w-[90vw] max-h-[80vh]
         content absolute top-2 sm:(right-0 max-h-[90vh])
         overflow-hidden overflow-y-auto
         bg-default-elevated rounded-xl shadow-md;

         @screen <sm {
            @apply top-[50%] left-[50%] px-6 py-4;
            transform: translate(-50%, -50%);
         }
      }
   }
}

.markdown-body {
   h1,
   h2 {
      @apply mb-2 font-medium;
   }

   h1 {
      @apply text-2xl;
   }

   h2 {
      @apply text-[18px];
   }

   p {
      @apply text-default/70 leading-relaxed;

      &:not(:last-of-type) {
         @apply mb-5;
      }
   }

   a {
      @apply font-medium underline text-accent;
   }
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FaqMD from '/docs/faq.md';

export default defineComponent({
   components: {
      FaqMD
   },

   setup() {
      const isActive = ref(false);
      const showModal = (state: boolean) => {
         isActive.value = state;
      };

      return { isActive, showModal };
   }
});
</script>

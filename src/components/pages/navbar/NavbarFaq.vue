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

<style lang="postcss" src="@assets/styles/pages/navbar/navbar-faq.pcss"></style>

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

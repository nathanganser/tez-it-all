<template>
   <transition name="fade" mode="out-in">
      <div v-if="modelValue" class="modal-wrapper">
         <div class="modal-wrapper-overlay" @click.self="closeModal" />
         <div class="modal-wrapper-slot">
            <slot />
         </div>
      </div>
   </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
   provide() {
      return {
         closeModal: this.closeModal
      };
   },

   props: {
      modelValue: {
         type: Boolean,
         default: false
      }
   },

   emits: ['update:modelValue'],

   methods: {
      closeModal() {
         this.updateModalState(false);
      },

      updateModalState(state: boolean) {
         this.$emit('update:modelValue', state);
      }
   }
});
</script>

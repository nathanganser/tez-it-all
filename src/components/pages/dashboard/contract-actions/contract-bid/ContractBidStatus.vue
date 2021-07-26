<template>
   <div class="contract-bid-status">
      <div v-if="status === true" class="wallet-section">
         <div class="wallet-section-header">
            <img
               class="header-logo"
               src="@assets/drawable/artworks/well-done.svg"
               draggable="false"
               loading="eager"
            >

            <h1 class="header-title">Transfer Request Sent</h1>
            <h1 class="header-subtitle">
               Transaction has been broadcasted to the network successfully.
            </h1>
         </div>

         <CTAButton class="wallet-section-cta" @click="finish">
            Continue
         </CTAButton>
      </div>

      <div v-if="status === false" class="wallet-section">
         <div class="wallet-section-header">
            <img
               class="header-logo"
               src="@assets/drawable/artworks/savings.svg"
               draggable="false"
               loading="eager"
            >

            <h1 class="header-title">Bid Failed</h1>
            <h1 class="header-subtitle">
               An error occurred. Please try again.
            </h1>
         </div>

         <CTAButton class="wallet-section-cta" @click="reset">
            Retry
         </CTAButton>
      </div>
   </div>
</template>

<style lang="postcss">
.contract-bid-status .wallet-section {
   .header-logo {
      @apply w-[70%];
   }

   .wallet-section-cta {
      @apply bg-indigo-500
      hover:border-indigo-600 active:border-indigo-700;
   }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
   inject: ['closeModal'],

   props: {
      status: {
         type: Boolean,
         default: null
      }
   },
   emits: ['reset'],

   methods: {
      finish() {
         this.reset();
         (this as any).closeModal();
      },
      reset() {
         this.$emit('reset');
      }
   }
});
</script>

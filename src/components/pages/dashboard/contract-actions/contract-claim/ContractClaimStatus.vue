<template>
   <div class="contract-claim-status">
      <div v-if="status === true" class="wallet-section">
         <div class="wallet-section-header">
            <img
               class="header-logo"
               src="@assets/drawable/artworks/well-done.svg"
               draggable="false"
               loading="eager"
            >

            <h1 class="header-title">Claim Successful</h1>
            <h1 class="header-subtitle">
               Congratulations! You have claimed your tezos.
            </h1>
         </div>

         <CTAButton class="wallet-section-cta" @click="close">
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

            <h1 class="header-title">Claim Failed</h1>
            <h1 class="header-subtitle">
               Sorry, the claim process was unsuccessful. Please try again. If
               it still dosen't work contact Satoshi Nakamoto.
            </h1>
         </div>

         <CTAButton class="wallet-section-cta" @click="close"> Okay </CTAButton>
      </div>
   </div>
</template>

<style lang="postcss">
.contract-claim-status {
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
      close() {
         (this as any).closeModal();
      }
   }
});
</script>

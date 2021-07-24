<template>
   <div class="contract-claim-process">
      <Spinner />
      <p class="contract-claim-process-label">
         Processing...<br>
         Do not close this window
      </p>
   </div>
</template>

<style lang="postcss">
.contract-claim-process {
   @apply flex flex-col items-center;

   &-label {
      @apply mt-8 text-18px text-default/78
      text-center leading-relaxed;
   }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { claimContractBids } from '~/plugins/api';

export default defineComponent({
   emits: ['claim-processed'],

   created() {
      claimContractBids().then((result) => {
         this.$emit('claim-processed', result);
      });
   }
});
</script>

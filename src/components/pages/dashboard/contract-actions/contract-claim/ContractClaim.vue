<template>
   <Wallet @update:modelValue="reset">
      <transition name="fade-slide-up" mode="out-in">
         <ContractClaimProcess
            v-if="isProcessing"
            @claim-processed="onClaimProcessed"
         />
         <ContractClaimStatus v-else :status="claimStatus" />
      </transition>
   </Wallet>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
   props: {
      contract: {
         type: Object as PropType<ContractStats>,
         default: () => {}
      }
   },

   data() {
      return {
         isProcessing: true,
         claimStatus: false
      };
   },

   methods: {
      reset() {
         this.claimStatus = false;
         this.isProcessing = true;
      },

      onClaimProcessed(result: boolean) {
         console.log(result);
         this.isProcessing = false;
         this.claimStatus = result;
      }
   }
});
</script>

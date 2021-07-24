<template>
   <Wallet @update:modelValue="reset">
      <transition name="fade-slide-up" mode="out-in">
         <ContractBidStatus
            v-if="bidStatus !== null"
            :status="bidStatus"
            @reset="reset"
         />
         <ContractBidInput v-else v-bind="{ contract }" @place-bid="placeBid" />
      </transition>
   </Wallet>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { placeContractBid } from '~/plugins/api';

export default defineComponent({
   props: {
      contract: {
         type: Object as PropType<ContractStats>,
         default: () => {}
      }
   },

   data() {
      return {
         bidStatus: null as null | boolean
      };
   },

   methods: {
      async placeBid(amount: number, callback: () => void) {
         const bid = Number(amount);

         if (bid > this.contract.totalAmount) {
            this.bidStatus = await placeContractBid(bid).catch((error) => {
               alert(error.message);
               return false;
            });
            callback?.();
         }
      },

      reset() {
         this.bidStatus = null;
      }
   }
});
</script>

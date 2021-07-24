<template>
   <div class="contract-actions">
      <button class="contract-actions-button button-bid" @click="showBidModal">
         <span class="action-label">Place Bid</span>
         <span class="action-sublabel">
            Next bid has to be higher than: {{ contract.totalAmount }}ꜩ
         </span>
      </button>

      <button
         class="contract-actions-button button-claim"
         :class="{ disabled: !canClaim }"
         @click="showClaimModal"
      >
         <span class="action-label">Claim</span>
         <span class="action-sublabel">
            You can't claim until bidding is finished
         </span>
      </button>

      <ContractBid v-model="actions.placeBid" v-bind="{ contract }" />
      <ContractClaim v-model="actions.claim" />
   </div>
</template>

<style lang="postcss" src="@assets/styles/pages/dashboard/contract-actions.pcss"></style>

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
         actions: {
            placeBid: false,
            claim: false
         }
      };
   },

   computed: {
      canClaim(): boolean {
         const expiryDate = this.contract?.expiryDate;

         if (expiryDate) {
            return Date.now() >= expiryDate.getTime();
         }

         return false;
      }
   },

   methods: {
      showBidModal() {
         this.actions.placeBid = true;
      },

      showClaimModal() {
         if (this.canClaim) {
            this.actions.claim = true;
         }
      }
   }
});
</script>

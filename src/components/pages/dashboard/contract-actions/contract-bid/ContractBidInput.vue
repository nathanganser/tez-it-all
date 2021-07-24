<template>
   <div class="contract-bid">
      <div class="contract-bid-header">
         <span class="header-title">Place Bid</span>
         <span class="header-subtitle">Winner takes it all</span>
      </div>

      <div class="contract-bid-content">
         <input
            v-model="bidAmount"
            type="number"
            class="content-input"
            :min="getMinimumBid()"
            maxlength="7"
            @input="validateInput(false)"
            @blur="validateInput(true)"
         >

         <div class="content-stats">
            <span
               class="content-stats-item"
            >Current bid is: {{ contract.totalAmount || 0 }} tez</span>
            <span
               class="content-stats-item"
            >Your bid is: {{ bidAmount || 0 }} tez</span>
         </div>
      </div>

      <CTAButton
         class="contract-bid-cta"
         :disabled="bidAmount <= contract.totalAmount"
         :loading="isProcessing"
         @click="placeBid"
      >
         Place Bid
      </CTAButton>
   </div>
</template>

<style lang="postcss">
.contract-bid {
   @apply h-full pt-1 pb-2
   flex flex-col;

   --spinner-border-size: 2px;

   &-header {
      .header-title {
         @apply block mb-1 text-xl font-medium;
      }

      .header-subtitle {
         @apply text-base text-default/70;
      }
   }

   &-content {
      @apply my-auto text-center;

      .content-input {
         @apply w-[75%] py-3
         border-none outline-none
         text-3xl text-center font-medium;

         border-bottom: 1px solid #000;
      }

      .content-stats {
         @apply my-5 break-all
         text-sm text-default/80;

         word-break: break-word;

         &-item {
            @apply block mb-2;
         }
      }
   }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
   props: {
      contract: {
         type: Object as PropType<ContractStats>,
         default: () => {}
      }
   },
   emits: ['place-bid'],

   data() {
      return {
         bidAmount: this.getMinimumBid() || 1,
         isProcessing: false
      };
   },

   methods: {
      getMinimumBid(): number {
         return Number(this.contract.totalAmount.toFixed(3) || 1e-6) + 0.5;
      },

      validateInput(post: boolean) {
         const bid = this.bidAmount;
         const minBid = this.contract.totalAmount;

         if (post) {
            if (bid <= minBid) {
               this.bidAmount = this.getMinimumBid();
            }
         } else {
            const value = bid.toString();
            const maxLength = 7;

            if (value.length > maxLength) {
               this.bidAmount = Number(value.slice(0, maxLength + 1));
            }
         }
      },

      placeBid() {
         this.isProcessing = true;

         this.$emit('place-bid', this.bidAmount, () => {
            this.isProcessing = false;
         });
      }
   }
});
</script>

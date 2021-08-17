<template>
   <div class="dashboard-card contract-stats">
      <div class="stats-amount">{{ stats.totalAmount || 0 }}</div>

      <div class="stats-items">
         <div class="stats-item">
            <button
               class="stats-item-value"
               title="Copy address"
               @click="copyBidderAddress"
            >
               {{ stats.currentWinner || '-' }}
            </button>

            <span class="stats-item-label">Highest Bidder</span>
         </div>

         <div class="stats-item">
            <span class="stats-item-value">
               {{ formatRelative(stats.expiryDate) }}
            </span>
            <span class="stats-item-label">Tez claimable after</span>
         </div>
      </div>
   </div>
</template>

<style lang="postcss" src="@assets/styles/pages/dashboard/contract-stats.pcss"></style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { formatRelative } from 'date-fns';

export default defineComponent({
   props: {
      stats: {
         type: Object as PropType<ContractStats>,
         default: () => {}
      }
   },

   methods: {
      copyBidderAddress() {
         navigator.clipboard.writeText(this.stats.currentWinner);
      },

      formatRelative(date: Date) {
         const baseDate = new Date();
         const formatted = date ? formatRelative(date, baseDate) : '-';

         return formatted;
      }
   }
});
</script>

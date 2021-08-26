<template>
   <main class="view-dashboard">
      <div class="view-dashboard-contract">
         <ContractStats
            :stats="contract"
            :xtz-rate="xtzRate"
            class="dashboard-contract-stats"
         />
         <ContractActions
            v-bind="{ contract }"
            class="dashboard-contract-actions"
         />
      </div>

      <ContractFaq />
      <SplashScreen v-bind="{ isLoaded }" />
   </main>
</template>

<style lang="postcss" src="@assets/styles/pages/dashboard/index.pcss"></style>

<script lang="ts">
import { defineComponent } from 'vue';
import { getContractStats, getXTZRateInUSD } from '~/plugins/api';

export default defineComponent({
   name: 'Dashboard',

   data() {
      return {
         contract: {} as ContractStats,
         xtzRate: 0,

         isLoaded: false
      };
   },

   created() {
      this.getStats();
   },

   methods: {
      async getStats() {
         this.contract = await getContractStats();
         this.xtzRate = await getXTZRateInUSD();
         this.isLoaded = true;

         setTimeout(this.getStats, 5000);
      }
   }
});
</script>

<route>
name: Dashboard
meta:
   requiresAuth: false
</route>

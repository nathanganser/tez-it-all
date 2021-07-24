<template>
   <main class="view-dashboard">
      <ContractStats :stats="contract" class="dashboard-contract-stats" />
      <ContractActions
         v-bind="{ contract }"
         class="dashboard-contract-actions"
      />
   </main>
</template>

<style lang="postcss" src="@assets/styles/pages/dashboard/index.pcss"></style>

<script lang="ts">
import { defineComponent } from 'vue';
import { getContractStats } from '~/plugins/api';

export default defineComponent({
   name: 'Dashboard',

   data() {
      return {
         contract: {} as ContractStats,
         isLoaded: false
      };
   },

   created() {
      this.getStats();
   },

   methods: {
      async getStats() {
         this.contract = await getContractStats();
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

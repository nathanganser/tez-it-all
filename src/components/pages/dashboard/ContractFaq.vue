<template>
   <FaqMD class="dashboard-contract-faq" />
</template>

<style lang="postcss" src="@assets/styles/pages/dashboard/contract-faq.pcss"></style>

<script lang="ts">
import { defineComponent } from 'vue';
import FaqMD from '/docs/faq.md';

export default defineComponent({
   components: {
      FaqMD
   }
});
</script>

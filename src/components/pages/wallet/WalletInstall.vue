<template>
   <div class="wallet-section">
      <div class="wallet-section-header">
         <img
            class="header-logo"
            src="@assets/drawable/icons/temple-icon-128.png"
            draggable="false"
            loading="eager"
         >

         <h1 class="header-title">Install Temple Wallet</h1>
         <h1 class="header-subtitle">
            Temple wallet is required to make secure transactions
         </h1>
      </div>

      <CTAButton class="wallet-section-cta" @click="openWalletHomepage">
         Install Temple Wallet
      </CTAButton>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
   methods: {
      async openWalletHomepage() {
         const url = 'https://templewallet.com/download';
         window.open(url, '_blank');
      }
   }
});
</script>

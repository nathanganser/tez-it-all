<template>
   <div class="wallet-section">
      <div class="wallet-section-header">
         <img
            class="header-logo"
            src="@assets/drawable/icons/temple-icon-128.png"
            draggable="false"
            loading="eager"
         >

         <h1 class="header-title">Connect your wallet</h1>
         <h1 class="header-subtitle">
            Current only Temple wallet is supported
         </h1>
      </div>

      <CTAButton
         :loading="connecting"
         class="wallet-section-cta"
         @click="connectWalletAccount"
      >
         Connect Temple Wallet
      </CTAButton>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { connectWallet } from '~/plugins/api';

export default defineComponent({
   emits: ['connect'],
   data() {
      return {
         connecting: false
      };
   },

   methods: {
      async connectWalletAccount() {
         this.connecting = true;
         await connectWallet()
            .then(() => this.$emit('connect'))
            .catch((e) => console.error(e.message));
         this.connecting = false;
      }
   }
});
</script>

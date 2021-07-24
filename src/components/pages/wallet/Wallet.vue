<template>
   <Modal>
      <transition name="fade-slide-up" mode="out-in" class="wallet-modal">
         <div v-if="isProcessing"><Spinner /></div>
         <WalletInstall v-else-if="!wallet.available" />
         <WalletConnect v-else-if="!wallet.connected" @connect="checkWallet" />

         <div v-else class="wallet-modal-slot">
            <slot />
         </div>
      </transition>
   </Modal>
</template>

<style lang="postcss" src="@assets/styles/pages/wallet/wallet.pcss"></style>

<script lang="ts">
import { TempleWallet } from '@temple-wallet/dapp';
import { defineComponent } from 'vue';
import { getWalletStatus } from '~/plugins/api';

export default defineComponent({
   data() {
      return {
         isProcessing: true,

         wallet: {
            available: false,
            connected: false
         }
      };
   },

   created() {
      this.checkWallet();

      TempleWallet.onAvailabilityChange((available) => {
         this.wallet.available = available;
      });

      TempleWallet.onPermissionChange((stats) => {
         this.wallet.connected = !!stats?.pkh;
      });
   },

   methods: {
      async checkWallet() {
         this.isProcessing = true;
         this.wallet = await getWalletStatus();
         this.isProcessing = false;
      }
   }
});
</script>

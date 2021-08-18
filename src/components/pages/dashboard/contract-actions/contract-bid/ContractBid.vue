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
import { defineComponent, PropType, ref } from 'vue';
import { useNotification } from 'naive-ui';
import { placeContractBid } from '~/plugins/api';

export default defineComponent({
   props: {
      contract: {
         type: Object as PropType<ContractStats>,
         default: () => {}
      }
   },

   setup(props) {
      const notification = useNotification();
      const bidStatus = ref(null as null | boolean);

      const reset = () => {
         bidStatus.value = null;
      };

      const notifyBidStatus = (state: boolean) => {
         if (state === true) {
            return notification.create({
               type: 'info',
               title: 'Processing Transaction',
               content: 'Please wait. We are processing your transaction.',
               closable: false
            });
         }

         return notification.create({
            type: 'error',
            title: 'Bid Failed',
            content: 'Your transaction has failed. Try again after some time.',
            duration: 5000
         });
      };

      const placeBid = async (amount: number, callback: () => void) => {
         const bid = Number(amount);

         if (bid > props.contract.totalAmount) {
            bidStatus.value = await placeContractBid(bid)
               .then((data) => {
                  const { state, promise } = data as BidStatus;
                  const node = notifyBidStatus(true);
                  promise.then(node.destroy);

                  return !!state;
               })
               .catch((error) => {
                  console.error(error);
                  notifyBidStatus(false);
                  return false;
               });
            callback?.();
         }
      };

      return {
         bidStatus, notifyBidStatus, reset, placeBid
      };
   }
});
</script>

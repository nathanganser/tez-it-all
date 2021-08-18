import { getContractFromWallet, getTezosInstance } from './core';

const tezos = getTezosInstance();
const contractAddress = import.meta.env.VITE_APP_CONTRACT_ADDRESS as string;

export async function getTotalBidAmount(): Promise<number> {
   const contract = await tezos.contract.at(contractAddress);
   const storage: any = await contract.storage();
   const amount = storage.lastBid.c[0];

   return amount;
}

export async function getContractStats(): Promise<ContractStats> {
   const contract = await tezos.contract.at(contractAddress);
   const storage: any = await contract.storage();

   const totalAmount = Number(storage.lastBid.c[0] / 1e6);
   const currentWinner = String(storage.currentWinner);
   const expiryDate = new Date(storage.victoryEpoch);
   const expiryDateString = expiryDate.toDateString();

   return {
      totalAmount,
      expiryDate,
      currentWinner,
      expiryDateString
   };
}

export async function placeContractBid(
   amount: number
): Promise<boolean | BidStatus> {
   try {
      const contract = await getContractFromWallet(contractAddress);
      const operation = await contract.methods.add_bid(amount).send({ amount });

      return await operation
         .getCurrentConfirmation()
         .then((hash) => {
            const state = hash === 0;
            const promise = operation.confirmation();

            return { state, promise };
         })
         .catch(() => false);
   } catch (error) {
      console.error(error);
      return false;
   }
}

export async function claimContractBids(): Promise<boolean> {
   try {
      const contract = await getContractFromWallet(contractAddress);
      const operation = await contract.methods.claim(0).send();

      return await operation
         .confirmation()
         .then((op) => op.completed)
         .catch(() => false);
   } catch (error) {
      console.error(error);
      return false;
   }
}

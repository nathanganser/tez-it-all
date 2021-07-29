import {
   TezosToolkit,
   ContractAbstraction,
   Wallet,
   WalletProvider
} from '@taquito/taquito';
import { TempleWallet } from '@temple-wallet/dapp';

const rpc = import.meta.env.VITE_APP_RPC_CLIENT as string;
const tezos = new TezosToolkit(rpc);
const wallet = new TempleWallet('TezItAll');

export function getTezosInstance(): TezosToolkit {
   return tezos;
}

export async function getWalletStatus(): Promise<WalletConnectionStatus> {
   const available = await TempleWallet.isAvailable();

   return {
      available,
      connected: wallet.connected
   };
}

export async function connectWallet(): Promise<TempleWallet> {
   const network = import.meta.env.PROD ? 'mainnet' : 'florencenet';
   const available = await TempleWallet.isAvailable();
   const { connected } = wallet;

   if (!available) {
      throw new Error('Temple Wallet not installed');
   }

   if (!connected) {
      await wallet.connect(network);

      // Set Tezos Wallet Provider
      tezos.setWalletProvider(wallet as unknown as WalletProvider);
   }

   return wallet;
}

export function getContractFromWallet(
   address: string
): Promise<ContractAbstraction<Wallet>> {
   return connectWallet().then(async (instance) => {
      const tezosInstance = instance.toTezos();
      const contract = await tezosInstance.wallet.at(address);
      return contract;
   });
}

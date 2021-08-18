interface ContractStats {
   totalAmount: number;
   currentWinner: string;
   expiryDate: Date;
   expiryDateString: string;
}

interface WalletConnectionStatus {
   available: boolean;
   connected: boolean;
}

interface BidStatus {
   state: boolean;
   promise: Promise<{
      block: BlockResponse;
      expectedConfirmation: number;
      currentConfirmation: number;
      completed: boolean;
      isInCurrentBranch: () => Promise<boolean>;
   }>
}

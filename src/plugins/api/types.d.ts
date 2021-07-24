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

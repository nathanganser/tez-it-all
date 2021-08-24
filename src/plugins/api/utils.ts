let usdRate = 0;

export async function getAmountInUSD(value: number): Promise<number> {
   if (usdRate === 0) {
      const endpoint = 'https://api.tzstats.com/markets/kraken/XTZ_USD/ticker';
      const request = await fetch(endpoint).then((r) => r.json());
      usdRate = request.open;
   }

   return usdRate * value;
}

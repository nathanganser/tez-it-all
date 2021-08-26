export async function getXTZRateInUSD(): Promise<number> {
   const endpoint = 'https://api.tzstats.com/markets/kraken/XTZ_USD/ticker';
   const request = await fetch(endpoint).then((r) => r.json());
   return request.open || 0;
}

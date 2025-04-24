export interface AssetUpdate {
  priceChange1h: number;
  priceChange24h: number;
  priceChange7d: number;
  volumeChange: number;
}

export interface CryptoUpdate {
  id: string;
  updates: AssetUpdate;
}

export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  priceChange1h: number;
  priceChange24h: number;
  priceChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  chartData?: number[];
}

export type OnMessageCallback = (updates: CryptoUpdate[]) => void;

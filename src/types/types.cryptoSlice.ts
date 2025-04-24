export interface CryptoAsset {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  previousPrice?: number;
  priceChange1h: number;
  priceChange24h: number;
  priceChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  chartData: any[];
}

export interface CryptoState {
  assets: CryptoAsset[];
  loading: boolean;
  error: string | null;
}

export interface AssetUpdate {
  id: string;
  updates: Partial<CryptoAsset>;
}

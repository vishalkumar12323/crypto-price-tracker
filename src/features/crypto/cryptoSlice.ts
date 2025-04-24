import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialCryptoData } from "./initialData";
import {
  AssetUpdate,
  CryptoAsset,
  CryptoState,
} from "../../types/types.cryptoSlice";

const initialState: CryptoState = {
  assets: initialCryptoData,
  loading: false,
  error: null,
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAsset: (state: CryptoState, action: PayloadAction<AssetUpdate>) => {
      const { id, updates } = action.payload;
      const assetIndex = state.assets.findIndex((asset) => asset.id === id);

      if (assetIndex !== -1) {
        state.assets[assetIndex] = {
          ...state.assets[assetIndex],
          ...updates,
          previousPrice: state.assets[assetIndex].price,
        };
      }
    },
    updateAllAssets: (
      state: CryptoState,
      action: PayloadAction<CryptoAsset[]>
    ) => {
      state.assets = action.payload.map((newAsset) => {
        const existingAsset = state.assets.find(
          (asset) => asset.id === newAsset.id
        );
        return {
          ...newAsset,
          previousPrice: existingAsset ? existingAsset.price : newAsset.price,
        };
      });
    },
    setLoading: (state: CryptoState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state: CryptoState, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { updateAsset, updateAllAssets, setLoading, setError } =
  cryptoSlice.actions;

export const selectAllAssets = (state: {
  crypto: CryptoState;
}): CryptoAsset[] => state.crypto.assets;
export const selectAssetById = (
  state: { crypto: CryptoState },
  assetId: string
): CryptoAsset | undefined =>
  state.crypto.assets.find((asset) => asset.id === assetId);
export const selectLoading = (state: { crypto: CryptoState }): boolean =>
  state.crypto.loading;
export const selectError = (state: { crypto: CryptoState }): string | null =>
  state.crypto.error;

export default cryptoSlice.reducer;

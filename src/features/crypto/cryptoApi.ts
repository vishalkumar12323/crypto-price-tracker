import {
  OnMessageCallback,
  CryptoUpdate,
  AssetUpdate,
} from "../../types/types.crypto";
import { AppDispatch } from "../../store";

export class CryptoWebSocketSimulator {
  private onMessageCallback: OnMessageCallback;
  private intervalId: NodeJS.Timeout | null;

  constructor(onMessageCallback: OnMessageCallback) {
    this.onMessageCallback = onMessageCallback;
    this.intervalId = null;
  }

  connect() {
    console.log("Connecting to crypto WebSocket...");

    this.intervalId = setInterval(() => {
      this.simulateUpdate();
    }, 1500);

    console.log("Connected to crypto WebSocket");
  }

  disconnect() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log("Disconnected from crypto WebSocket");
    }
  }

  simulateUpdate() {
    this.onMessageCallback(this.generateRandomUpdates());
  }

  generateRandomUpdates(): CryptoUpdate[] {
    const assetIds = [
      "bitcoin",
      "ethereum",
      "tether",
      "ripple",
      "bnb",
      "solana",
    ];
    const numberOfUpdates = Math.floor(Math.random() * 3) + 1;
    const assetsToUpdate: CryptoUpdate[] = [];

    for (let i = 0; i < numberOfUpdates; i++) {
      const randomIndex = Math.floor(Math.random() * assetIds.length);
      const assetId = assetIds[randomIndex];

      if (!assetsToUpdate.some((update) => update.id === assetId)) {
        assetsToUpdate.push({
          id: assetId,
          updates: this.generateAssetUpdate(),
        });
      }
    }

    return assetsToUpdate;
  }
  generateAssetUpdate(): AssetUpdate {
    const priceChangePercentage =
      (Math.random() * 0.4 + 0.1) * (Math.random() > 0.5 ? 1 : -1);

    const volumeChangePercentage =
      (Math.random() * 0.8 + 0.2) * (Math.random() > 0.5 ? 1 : -1);

    return {
      priceChange1h: this.adjustPercentage(priceChangePercentage * 0.5),
      priceChange24h: this.adjustPercentage(priceChangePercentage * 2),
      priceChange7d: this.adjustPercentage(priceChangePercentage * 5),
      volumeChange: volumeChangePercentage,
    };
  }

  adjustPercentage(basePercentage: number): number {
    return basePercentage + (Math.random() * 0.2 - 0.1);
  }
}

// middleware function for connect to redux store.
export const connectWebSocket = (
  dispatch: AppDispatch
): CryptoWebSocketSimulator => {
  // Create a socket instance
  const socket = new CryptoWebSocketSimulator((updates) => {
    // Process each update and dispatch to Redux.
    updates.forEach((update) => {
      dispatch({
        type: "crypto/updateAsset",
        payload: update,
      });
    });
  });

  // Connect to the socket.
  socket.connect();
  return socket;
};

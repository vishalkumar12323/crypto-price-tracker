# Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit application that simulates real-time cryptocurrency price tracking, similar to CoinMarketCap.

![Crypto Tracker Demo](demo.gif)

## Features

- Real-time price updates via simulated WebSocket
- Redux state management using Redux Toolkit
- Responsive table layout with Tailwind CSS
- Visual indicators for price changes (green/red)
- 7-day chart visualization

## Tech Stack

- React.js
- Redux Toolkit
- Tailwind CSS
- Simulated WebSocket for real-time updates

## Architecture

The application follows a standard Redux architecture:

- **Store**: Central state management with Redux Toolkit
- **Slice**: CryptoSlice for managing cryptocurrency data
- **API**: Simulated WebSocket service for real-time updates
- **Components**: React components for UI rendering

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/crypto-price-tracker.git
   cd crypto-price-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
  ├── app/
  │   └── store.js          // Redux store configuration
  ├── features/
  │   └── crypto/
  │       ├── cryptoSlice.js // Redux slice for crypto data
  │       └── cryptoAPI.js   // Simulated WebSocket service
  ├── components/
  │   ├── CryptoTable.jsx   // Main table component
  │   ├── CryptoRow.jsx     // Individual row component
  │   └── PriceChange.jsx   // Price change display with colors
  ├── utils/
  │   └── formatters.js     // Utility functions for formatting
  ├── App.jsx               // Main application component
  └── index.js              // Application entry point
```

## Enhancement Ideas

- Implement real WebSocket connection (e.g., Binance API)
- Add filtering and sorting capabilities
- Implement localStorage for persistence
- Add unit tests for reducers and selectors
- Convert to TypeScript for better type safety

## License

MIT

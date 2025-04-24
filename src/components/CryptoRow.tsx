import PriceChange from "./PriceChange";
import {
  formatCurrency,
  formatNumber,
  formatLargeNumber,
} from "../utils/formatters";
import ChartPlaceholder from "./ChartPlaceholder";
import { CryptoAsset } from "../types/types.cryptoSlice";

const CryptoRow = ({ asset }: { asset: CryptoAsset }) => {
  const {
    rank,
    name,
    symbol,
    logo,
    price,
    priceChange1h,
    priceChange24h,
    priceChange7d,
    marketCap,
    volume24h,
    circulatingSupply,
  } = asset;

  // Determine if price changed since last update for animation
  const priceDirection = asset.previousPrice
    ? price > asset.previousPrice
      ? "up"
      : price < asset.previousPrice
      ? "down"
      : "stable"
    : "stable";

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {rank}
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-8 w-8">
            <img
              className="h-8 w-8 rounded-full"
              src={logo}
              alt={`${name} logo`}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {symbol}
            </div>
          </div>
        </div>
      </td>
      <td
        className={`px-4 py-4 whitespace-nowrap text-sm font-medium 
        ${
          priceDirection === "up"
            ? "text-green-600 dark:text-green-400"
            : priceDirection === "down"
            ? "text-red-600 dark:text-red-400"
            : "text-gray-900 dark:text-white"
        }`}
      >
        {formatCurrency(price)}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm">
        <PriceChange value={priceChange1h} />
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm">
        <PriceChange value={priceChange24h} />
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm">
        <PriceChange value={priceChange7d} />
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {formatLargeNumber(marketCap)}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {formatLargeNumber(volume24h)}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {formatNumber(circulatingSupply)} {symbol}
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <ChartPlaceholder trend={priceChange7d > 0 ? "up" : "down"} />
      </td>
    </tr>
  );
};

export default CryptoRow;

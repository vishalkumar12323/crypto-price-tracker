import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllAssets } from "../features/crypto/cryptoSlice";
import { connectWebSocket } from "../features/crypto/cryptoApi";
import CryptoRow from "./CryptoRow";
import { AppDispatch } from "../store";

import { CryptoAsset } from "../types/types.cryptoSlice";

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets) as CryptoAsset[];
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const socket = connectWebSocket(dispatch);

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              #
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Price
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              1h %
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              24h %
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              7d %
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Market Cap
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Volume(24h)
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Circulating Supply
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Last 7 Days
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {assets.map((asset) => (
            <CryptoRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;

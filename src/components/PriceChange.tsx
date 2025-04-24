const PriceChange = ({ value }: { value: number }) => {
  const textColorClass =
    value > 0
      ? "text-green-600 dark:text-green-400"
      : value < 0
      ? "text-red-600 dark:text-red-400"
      : "text-gray-500 dark:text-gray-400";

  const formattedValue =
    value > 0 ? `+${value.toFixed(2)}%` : `${value.toFixed(2)}%`;

  const arrow = value > 0 ? "▲" : value < 0 ? "▼" : "";

  return (
    <span className={`${textColorClass} font-medium`}>
      {arrow} {formattedValue}
    </span>
  );
};

export default PriceChange;

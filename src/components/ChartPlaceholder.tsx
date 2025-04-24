type ChartTrend = "up" | "down";
interface ChartPlaceholderProps {
  trend: ChartTrend;
}

const ChartPlaceholder = ({ trend }: ChartPlaceholderProps) => {
  const colors = {
    up: {
      stroke: "#10B981",
      fill: "rgba(16, 185, 129, 0.1)",
    },
    down: {
      stroke: "#EF4444",
      fill: "rgba(239, 68, 68, 0.1)",
    },
  };

  // Get the appropriate color scheme based on trend
  const { stroke, fill } = colors[trend] || colors.up;

  return (
    <svg width="120" height="40" viewBox="0 0 120 40">
      <path
        d={
          trend === "up"
            ? "M0,30 C10,25 20,28 30,20 C40,15 50,5 60,15 C70,20 80,25 90,10 C100,5 110,15 120,5"
            : "M0,10 C10,20 20,15 30,25 C40,20 50,30 60,25 C70,30 80,20 90,35 C100,30 110,25 120,35"
        }
        fill="none"
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d={
          trend === "up"
            ? "M0,30 C10,25 20,28 30,20 C40,15 50,5 60,15 C70,20 80,25 90,10 C100,5 110,15 120,5 V40 H0 Z"
            : "M0,10 C10,20 20,15 30,25 C40,20 50,30 60,25 C70,30 80,20 90,35 C100,30 110,25 120,35 V40 H0 Z"
        }
        fill={fill}
      />
    </svg>
  );
};

export default ChartPlaceholder;

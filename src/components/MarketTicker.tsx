import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

interface MarketData {
  index: string;
  value: number;
  change: number;
  changePercent: number;
}

export const MarketTicker = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([
    { index: "NIFTY 50", value: 24857.30, change: 234.50, changePercent: 0.95 },
    { index: "SENSEX", value: 82890.94, change: 692.27, changePercent: 0.84 },
    { index: "BANK NIFTY", value: 53234.85, change: -156.30, changePercent: -0.29 },
    { index: "NIFTY IT", value: 42876.15, change: 445.80, changePercent: 1.05 },
  ]);

  const [marketNews, setMarketNews] = useState([
    "IT stocks rally on strong Q4 earnings outlook",
    "Banking sector shows resilience amid global volatility",
    "FII inflows boost market sentiment",
    "Pharma stocks gain on export demand",
  ]);

  useEffect(() => {
    // Simulate live updates every 10 seconds
    const interval = setInterval(() => {
      setMarketData(prev => prev.map(item => ({
        ...item,
        value: item.value + (Math.random() - 0.5) * 50,
        change: item.change + (Math.random() - 0.5) * 10,
        changePercent: item.changePercent + (Math.random() - 0.5) * 0.2,
      })));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-navy to-navy-dark border-b border-border/30">
      <div className="container mx-auto px-4 py-4">
        {/* Market Indices */}
        <div className="flex overflow-x-auto gap-8 mb-4 scrollbar-hide">
          {marketData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 min-w-fit"
            >
              <div>
                <div className="text-xs text-muted-foreground font-medium">{item.index}</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">
                    {item.value.toFixed(2)}
                  </span>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    item.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}>
                    {item.change >= 0 ? (
                      <TrendingUp size={16} />
                    ) : (
                      <TrendingDown size={16} />
                    )}
                    <span>
                      {item.change >= 0 ? "+" : ""}
                      {item.change.toFixed(2)} ({item.changePercent >= 0 ? "+" : ""}
                      {item.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market News Ticker */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...marketNews, ...marketNews].map((news, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span>{news}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import { Stock } from "./types";

// Generate 500 sample stocks
export const generateStocksData = (): Stock[] => {
  const stocks: Stock[] = [];

  for (let i = 0; i < 500; i++) {
    stocks.push({
      id: `STOCK${i + 1}`,
      name: `Company ${i + 1}`,
      marketCap: Math.random() * 50000,
      peRatio: Math.random() * 50,
      roe: Math.random() * 30,
      debtToEquity: Math.random() * 3,
      dividendYield: Math.random() * 10,
      revenueGrowth: Math.random() * 40 - 10,
      epsGrowth: Math.random() * 40 - 10,
      currentRatio: Math.random() * 4,
      grossMargin: Math.random() * 60,
    });
  }

  return stocks;
};

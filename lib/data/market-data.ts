"use client";

import { generateChartData, calculateChange } from "@/lib/utils/chart-data";

// Use a fixed seed for consistent data generation between server and client
const SEED = 123;

// Deterministic random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export function getMarketData() {
  const baseData = [
    {
      name: "S&P 500",
      value: "5,648.40",
      seed: SEED,
    },
    {
      name: "Nasdaq 100",
      value: "17,713.53",
      seed: SEED + 1,
    },
    {
      name: "Dow Jones",
      value: "41,563.08",
      seed: SEED + 2,
    },
    {
      name: "Russell 2000",
      value: "2,217.63",
      seed: SEED + 3,
    },
  ];

  return baseData.map(item => {
    const data = generateChartData(30, item.seed);
    return {
      ...item,
      data,
      change: calculateChange(data).toFixed(2),
    };
  });
}
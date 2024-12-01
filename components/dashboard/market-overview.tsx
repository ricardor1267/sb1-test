"use client";

import { Card } from "@/components/ui/card";
import { MarketChart } from "@/components/charts/market-chart";
import { getMarketData } from "@/lib/data/market-data";
import { cn } from "@/lib/utils";

export function MarketOverview() {
  const marketData = getMarketData();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {marketData.map((item) => {
        const isPositive = parseFloat(item.change) >= 0;
        
        return (
          <Card key={item.name} className="p-4">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium leading-6">{item.name}</p>
              <span className={cn(
                "text-sm font-medium",
                isPositive ? "text-green-500" : "text-red-500"
              )}>
                {isPositive ? "+" : ""}{item.change}%
              </span>
            </div>
            <div className="text-2xl font-bold tracking-tight">{item.value}</div>
            <div className="h-[80px] mt-3">
              <MarketChart 
                data={item.data}
                isPositive={isPositive}
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
}
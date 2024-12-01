"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { cn } from "@/lib/utils";

interface MarketChartProps {
  data: Array<{ value: number; timestamp: string }>;
  isPositive?: boolean;
}

export function MarketChart({ data, isPositive = true }: MarketChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
        <XAxis
          dataKey="timestamp"
          hide
          padding={{ left: 10, right: 10 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis 
          hide 
          domain={['auto', 'auto']} 
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="text-xs text-muted-foreground">
                    {payload[0].value.toFixed(2)}
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Line
          type="monotone"
          dataKey="value"
          strokeWidth={2}
          dot={false}
          stroke={cn(
            isPositive ? "hsl(var(--chart-1))" : "hsl(var(--chart-3))"
          )}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
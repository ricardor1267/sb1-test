"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Star } from "lucide-react";

const stocks = [
  {
    id: 1,
    name: "Apple",
    symbol: "AAPL",
    price: "$207.23",
    dayChange: "+0.36%",
    monthChange: "-1.48%",
    ytdChange: "+16.06%",
    marketCap: "$3.22 T",
  },
  {
    id: 2,
    name: "Microsoft",
    symbol: "MSFT",
    price: "$417.14",
    dayChange: "+0.18%",
    monthChange: "-1.11%",
    ytdChange: "+9.42%",
    marketCap: "$3.00 T",
  },
  // Add more stocks as needed
];

export function StockTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]"></TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>1D %</TableHead>
            <TableHead>1M %</TableHead>
            <TableHead>YTD %</TableHead>
            <TableHead>M Cap</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocks.map((stock) => (
            <TableRow key={stock.id}>
              <TableCell>
                <Star className="h-4 w-4 text-muted-foreground" />
              </TableCell>
              <TableCell className="font-medium">
                <div>{stock.name}</div>
                <div className="text-sm text-muted-foreground">
                  {stock.symbol}
                </div>
              </TableCell>
              <TableCell>{stock.price}</TableCell>
              <TableCell className="text-green-500">{stock.dayChange}</TableCell>
              <TableCell className="text-red-500">{stock.monthChange}</TableCell>
              <TableCell className="text-green-500">{stock.ytdChange}</TableCell>
              <TableCell>{stock.marketCap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
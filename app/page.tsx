import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { MarketOverview } from "@/components/dashboard/market-overview";
import { StockTable } from "@/components/dashboard/stock-table";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 space-y-4 overflow-y-auto p-6">
          <MarketOverview />
          <StockTable />
        </main>
      </div>
    </div>
  );
}
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BarChart3,
  Globe,
  LayoutDashboard,
  Newspaper,
  Calendar,
  PieChart,
  ArrowLeftRight,
  Users,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Markets",
    items: [
      { title: "Screener", icon: Globe, href: "/screener" },
      { title: "Heatmaps", icon: PieChart, href: "/heatmaps" },
      { title: "News", icon: Newspaper, href: "/news" },
    ],
  },
  {
    title: "Calendar",
    items: [
      { title: "Earnings", icon: BarChart3, href: "/earnings" },
      { title: "Economy", icon: ArrowLeftRight, href: "/economy" },
    ],
  },
  {
    title: "Data",
    items: [
      { title: "Macro", icon: LayoutDashboard, href: "/macro" },
      { title: "Charting", icon: BarChart3, href: "/charting" },
      { title: "Comparison", icon: ArrowLeftRight, href: "/comparison" },
    ],
  },
  {
    title: "Community",
    items: [
      { title: "Superinvestors", icon: Users, href: "/superinvestors" },
      { title: "Portfolios", icon: PieChart, href: "/portfolios" },
      { title: "Posts", icon: FileText, href: "/posts" },
      { title: "Articles", icon: Newspaper, href: "/articles" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6" />
          <span className="font-semibold">Financial Dashboard</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-4 py-4">
          {sidebarItems.map((section) => (
            <div key={section.title} className="px-2">
              <h3 className="mb-2 text-sm font-semibold text-muted-foreground">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Button
                    key={item.href}
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      pathname === item.href && "bg-secondary"
                    )}
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
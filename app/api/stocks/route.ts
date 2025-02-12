import { NextResponse } from "next/server";
import { generateStocksData } from "@/lib/stocks-data";
import { FilterCondition, Stock } from "@/lib/types";

export async function POST(request: Request) {
  const { filters } = await request.json();

  const stocks = generateStocksData();

  const filteredStocks = stocks.filter((stock) => {
    return filters.every((filter: FilterCondition) => {
      const stockValue = stock[filter.parameter];
      switch (filter.operator) {
        case ">":
          return stockValue > filter.value;
        case "<":
          return stockValue < filter.value;
        case "=":
          return stockValue === filter.value;
        default:
          return true;
      }
    });
  });

  return NextResponse.json({ stocks: filteredStocks });
}

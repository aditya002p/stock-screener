import React from "react";
import { Stock } from "@/lib/types";
import { PARAMETERS } from "@/lib/constants";

interface ResultsTableProps {
  stocks: Stock[];
}

export default function ResultsTable({ stocks }: ResultsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Company</th>
            {Object.values(PARAMETERS).map((label) => (
              <th key={label} className="px-4 py-2 border">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td className="px-4 py-2 border">{stock.name}</td>
              <td className="px-4 py-2 border">{stock.marketCap.toFixed(2)}</td>
              <td className="px-4 py-2 border">{stock.peRatio.toFixed(2)}</td>
              <td className="px-4 py-2 border">{stock.roe.toFixed(2)}</td>
              <td className="px-4 py-2 border">
                {stock.debtToEquity.toFixed(2)}
              </td>
              <td className="px-4 py-2 border">
                {stock.dividendYield.toFixed(2)}
              </td>
              <td className="px-4 py-2 border">
                {stock.revenueGrowth.toFixed(2)}
              </td>
              <td className="px-4 py-2 border">{stock.epsGrowth.toFixed(2)}</td>
              <td className="px-4 py-2 border">
                {stock.currentRatio.toFixed(2)}
              </td>
              <td className="px-4 py-2 border">
                {stock.grossMargin.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

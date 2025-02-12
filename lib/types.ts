export interface Stock {
  id: string;
  name: string;
  marketCap: number;
  peRatio: number;
  roe: number;
  debtToEquity: number;
  dividendYield: number;
  revenueGrowth: number;
  epsGrowth: number;
  currentRatio: number;
  grossMargin: number;
}

export type FilterOperator = ">" | "<" | "=";

export interface FilterCondition {
  parameter: keyof Omit<Stock, "id" | "name">;
  operator: FilterOperator;
  value: number;
}

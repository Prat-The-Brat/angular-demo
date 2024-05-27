import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  getStockPrice(symbol: string): number {
    // In a real application, you would make an HTTP request to a stock API here.
    // For this example, we'll just return a dummy value.
    const prices: {[key: string]: number} = {
      AAPL: 150.25,
      GOOGL: 2725.30,
      MSFT: 289.67,
    };
    return prices[symbol] || 0;
  }
}
import { Component } from '@angular/core';
import { StockService } from './stock.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Add FormsModule to the imports array
})
export class AppComponent {
  title = 'Stock Price Checker';
  stockSymbol = 'AAPL';
  price: number;
  stocks = ['AAPL', 'GOOGL', 'MSFT'];

  constructor(private stockService: StockService) {
    this.price = this.stockService.getStockPrice(this.stockSymbol);
  }

  onStockSelect(symbol: string): void {
    this.stockSymbol = symbol;
    this.price = this.stockService.getStockPrice(symbol);
  }
}

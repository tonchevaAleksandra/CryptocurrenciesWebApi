import { Component, OnInit } from '@angular/core';
import { CryptocurrenciesService } from "../../services/cryptocurrencies.service";
import { CoinData } from "../../models/coin-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource: CoinData[] = [];

  constructor(private cryptoService: CryptocurrenciesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.cryptoService.loadTableData();
    this.dataSource = this.cryptoService.loadedData;
  }

}

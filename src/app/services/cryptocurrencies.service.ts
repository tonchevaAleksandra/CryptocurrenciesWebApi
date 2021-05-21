import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CoinData } from "../models/coin-data";
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CryptocurrenciesService {

  coinsList = ['ethereum','bitcoin','ripple','cardano','litecoin','polkadot','dogecoin','shiba-inu'];
  loadedData: CoinData[] = [];

  constructor(private http: HttpClient) {}

  getCoinData(coinId: string): any {
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  }

  loadTableData(): void {
    const requests: any[] = [];
    this.loadedData = [];

    this.coinsList.forEach((coinName) => {
      requests.push(this.getCoinData(coinName));
    });

    // forkJoin is part of RxJs so needs to be imported
    forkJoin(requests).subscribe(results => {
      results.map(result => {
        this.mapResult(result);
      });
    });
  }

  mapResult(coin: any): void {
    this.loadedData.push({
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      change_last_24h: coin.market_data.price_change_percentage_24h,
      value: coin.market_data.current_price.usd,
      last_updated_at: coin.market_data.last_updated,
      image: coin.image.thumb
    });
  }
}


import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CryptocurrenciesService} from "../../services/cryptocurrencies.service";

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss']
})
export class CryptoDetailsComponent implements OnInit {

  cryptoId: string;
  coinData: any;

  constructor(private activatedRoute: ActivatedRoute, private cryptoService: CryptocurrenciesService) {
    this.cryptoId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.cryptoService.getCoinData(this.cryptoId).subscribe((data: any) => {
      this.coinData = data;
    })
  };

}

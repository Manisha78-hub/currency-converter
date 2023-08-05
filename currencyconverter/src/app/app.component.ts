import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currencyconverter';
  currentjson: any = [];

base = 'INR';
  cont2 = 'INR';
  result: string = '1'

  changebase(a:string){
    this.base = a;
    //console.log(this.base)
  }

  tocountry(b:string){
    this.cont2 = b;
    //console.log(this.cont2)
  }

  constructor(private currency: CurrencyapidataService){}

  convert(){
    //console.log(this.base)
    //console.log(this.cont2)

    this.currency.getcurrencydata(this.base).subscribe(data =>{
      console.log(data)
      this.currentjson = JSON.stringify(data);
      this.currentjson = JSON.parse(this.currentjson)

      if(this.cont2 == 'AFN'){
        this.result = this.currentjson.rates.AFN
      }
      if(this.cont2 == 'ALL'){
        this.result = this.currentjson.rates.ALL
      }
      if(this.cont2 == 'DZD'){
        this.result = this.currentjson.rates.DZD
      }
      if(this.cont2 == 'ARS'){
        this.result = this.currentjson.rates.ARS
      }
      if(this.cont2 == 'AMD'){
        this.result = this.currentjson.rates.AMD
      }
      if(this.cont2 == 'AWG'){
        this.result = this.currentjson.rates.AWG
      }
      if(this.cont2 == 'AUD'){
        this.result = this.currentjson.rates.AUD
      }
      if(this.cont2 == 'AZN'){
        this.result = this.currentjson.rates.AZN
      }
      if(this.cont2 == 'BSD'){
        this.result = this.currentjson.rates.BSD
      }
      if(this.cont2 == 'BHD'){
        this.result = this.currentjson.rates.BHD
      }
      if(this.cont2 == 'BDT'){
        this.result = this.currentjson.rates.BDT
      }
      if(this.cont2 == 'BBD'){
        this.result = this.currentjson.rates.BBD
      }
      if(this.cont2 == 'BYN'){
        this.result = this.currentjson.rates.BYN
      }
      if(this.cont2 == 'BZD'){
        this.result = this.currentjson.rates.BZD
      }
      if(this.cont2 == 'BMD'){
        this.result = this.currentjson.rates.BMD
      }
      if(this.cont2 == 'BTN'){
        this.result = this.currentjson.rates.BTN
      }
      if(this.cont2 == 'BTC'){
        this.result = this.currentjson.rates.BTC
      }
      if(this.cont2 == 'BCH'){
        this.result = this.currentjson.rates.BCH
      }
      if(this.cont2 == 'VES'){
        this.result = this.currentjson.rates.VES
      }
      if(this.cont2 == 'BOB'){
        this.result = this.currentjson.rates.BOB
      }
      if(this.cont2 == 'BAM'){
        this.result = this.currentjson.rates.BAM
      }
      if(this.cont2 == 'BWP'){
        this.result = this.currentjson.rates.BWP
      }
      if(this.cont2 == 'BRL'){
        this.result = this.currentjson.rates.BRL
      }
      if(this.cont2 == 'BND'){
        this.result = this.currentjson.rates.BND
      }
      if(this.cont2 == 'BGN'){
        this.result = this.currentjson.rates.BGN
      }
      if(this.cont2 == 'BIF'){
        this.result = this.currentjson.rates.BIF
      }
      if(this.cont2 == 'KHR'){
        this.result = this.currentjson.rates.KHR
      }
      if(this.cont2 == 'CAD'){
        this.result = this.currentjson.rates.CAD
      }
      if(this.cont2 == 'CVE'){
        this.result = this.currentjson.rates.CVE
      }
      if(this.cont2 == 'KYD'){
        this.result = this.currentjson.rates.KYD
      }
      if(this.cont2 == 'XAF'){
        this.result = this.currentjson.rates.XAF
      }
      if(this.cont2 == 'CLP'){
        this.result = this.currentjson.rates.CLP
      }
      if(this.cont2 == 'CNY'){
        this.result = this.currentjson.rates.CNY
      }
      if(this.cont2 == 'CNH'){
        this.result = this.currentjson.rates.CNH
      }
      if(this.cont2 == 'COP'){
        this.result = this.currentjson.rates.COP
      }
      if(this.cont2 == 'KMF'){
        this.result = this.currentjson.rates.KMF
      }
      if(this.cont2 == 'CDF'){
        this.result = this.currentjson.rates.CDF
      }
      if(this.cont2 == 'CRC'){
        this.result = this.currentjson.rates.CRC
      }
      if(this.cont2 == 'HRK'){
        this.result = this.currentjson.rates.HRK
      }
      if(this.cont2 == 'CUP'){
        this.result = this.currentjson.rates.CUP
      }
      if(this.cont2 == 'CZK'){
        this.result = this.currentjson.rates.CZK
      }
      if(this.cont2 == 'DKK'){
        this.result = this.currentjson.rates.DKK
      }
      if(this.cont2 == 'DJF'){
        this.result = this.currentjson.rates.DJF
      }
      if(this.cont2 == 'STN'){
        this.result = this.currentjson.rates.STN
      }
      if(this.cont2 == 'DOP'){
        this.result = this.currentjson.rates.DOP
      }
      if(this.cont2 == 'XCD'){
        this.result = this.currentjson.rates.XCD
      }
      if(this.cont2 == 'ECS'){
        this.result = this.currentjson.rates.ECS
      }
      if(this.cont2 == 'EGP'){
        this.result = this.currentjson.rates.EGP
      }
      if(this.cont2 == 'AED'){
        this.result = this.currentjson.rates.AED
      }
      if(this.cont2 == 'EEK'){
        this.result = this.currentjson.rates.EEK
      }
      if(this.cont2 == 'ETH'){
        this.result = this.currentjson.rates.ETH
      }
      if(this.cont2 == 'ETB'){
        this.result = this.currentjson.rates.ETB
      }
      if(this.cont2 == 'EUR'){
        this.result = this.currentjson.rates.EUR
      }
      if(this.cont2 == 'FKP'){
        this.result = this.currentjson.rates.FKP
      }
      if(this.cont2 == 'FJD'){
        this.result = this.currentjson.rates.FJD
      }
      if(this.cont2 == 'XPF'){
        this.result = this.currentjson.rates.XPF
      }
      if(this.cont2 == 'GMD'){
        this.result = this.currentjson.rates.GMD
      }
      if(this.cont2 == 'GEL'){
        this.result = this.currentjson.rates.GEL
      }
      if(this.cont2 == 'GHS'){
        this.result = this.currentjson.rates.GHS
      }
      if(this.cont2 == 'GIP'){
        this.result = this.currentjson.rates.GIP
      }
      if(this.cont2 == 'XAU'){
        this.result = this.currentjson.rates.XAU
      }
      if(this.cont2 == 'GTQ'){
        this.result = this.currentjson.rates.GTQ
      }
      if(this.cont2 == 'GNF'){
        this.result = this.currentjson.rates.GNF
      }
      if(this.cont2 == 'GYD'){
        this.result = this.currentjson.rates.GYD
      }
      if(this.cont2 == 'HTG'){
        this.result = this.currentjson.rates.HTG
      }
      if(this.cont2 == 'HNL'){
        this.result = this.currentjson.rates.HNL
      }
      if(this.cont2 == 'HKD'){
        this.result = this.currentjson.rates.HKD
      }
      if(this.cont2 == 'HUF'){
        this.result = this.currentjson.rates.HUF
      }
      if(this.cont2 == 'ISK'){
        this.result = this.currentjson.rates.ISK
      }
      if(this.cont2 == 'INR'){
        this.result = this.currentjson.rates.INR
      }
      if(this.cont2 == 'IDR'){
        this.result = this.currentjson.rates.IDR
      }
      if(this.cont2 == 'IRR'){
        this.result = this.currentjson.rates.IRR
      }
      if(this.cont2 == 'IQD'){
        this.result = this.currentjson.rates.IQD
      }
      if(this.cont2 == 'JMD'){
        this.result = this.currentjson.rates.JMD
      }
      if(this.cont2 == 'JPY'){
        this.result = this.currentjson.rates.JPY
      }
      if(this.cont2 == 'JOD'){
        this.result = this.currentjson.rates.JOD
      }
      if(this.cont2 == 'KZT'){
        this.result = this.currentjson.rates.KZT
      }
      if(this.cont2 == 'KES'){
        this.result = this.currentjson.rates.KES
      }
      if(this.cont2 == 'KPW'){
        this.result = this.currentjson.rates.KPW
      }
      if(this.cont2 == 'KWD'){
        this.result = this.currentjson.rates.KWD
      }
      if(this.cont2 == 'AOA'){
        this.result = this.currentjson.rates.AOA
      }
      if(this.cont2 == 'KGS'){
        this.result = this.currentjson.rates.KGS
      }
      if(this.cont2 == 'LAK'){
        this.result = this.currentjson.rates.LAK
      }
      if(this.cont2 == 'LVL'){
        this.result = this.currentjson.rates.LVL
      }
      if(this.cont2 == 'LBP'){
        this.result = this.currentjson.rates.LBP
      }
      if(this.cont2 == 'LSL'){
        this.result = this.currentjson.rates.LSL
      }
      if(this.cont2 == 'LRD'){
        this.result = this.currentjson.rates.LRD
      }
      if(this.cont2 == 'LYD'){
        this.result = this.currentjson.rates.LYD
      }
      if(this.cont2 == 'LTC'){
        this.result = this.currentjson.rates.LTC
      }
      if(this.cont2 == 'MOP'){
        this.result = this.currentjson.rates.MOP
      }
      if(this.cont2 == 'MKD'){
        this.result = this.currentjson.rates.MKD
      }
      if(this.cont2 == 'MGA'){
        this.result = this.currentjson.rates.MGA
      }
      if(this.cont2 == 'MWK'){
        this.result = this.currentjson.rates.MWK
      }
      if(this.cont2 == 'MYR'){
        this.result = this.currentjson.rates.MYR
      }
      if(this.cont2 == 'MVR'){
        this.result = this.currentjson.rates.MVR
      }
      if(this.cont2 == 'MRO'){
        this.result = this.currentjson.rates.MRO
      }
      if(this.cont2 == 'MUR'){
        this.result = this.currentjson.rates.MUR
      }
      if(this.cont2 == 'MXN'){
        this.result = this.currentjson.rates.MXN
      }
      if(this.cont2 == 'MDL'){
        this.result = this.currentjson.rates.MDL
      }
      if(this.cont2 == 'MNT'){
        this.result = this.currentjson.rates.MNT
      }
      if(this.cont2 == 'MAD'){
        this.result = this.currentjson.rates.MAD
      }
      if(this.cont2 == 'MZM'){
        this.result = this.currentjson.rates.MZM
      }
      if(this.cont2 == 'MMK'){
        this.result = this.currentjson.rates.MMK
      }
      if(this.cont2 == 'ERN'){
        this.result = this.currentjson.rates.ERN
      }
      if(this.cont2 == 'NAD'){
        this.result = this.currentjson.rates.NAD
      }
      if(this.cont2 == 'NPR'){
        this.result = this.currentjson.rates.NPR
      }
      if(this.cont2 == 'ANG'){
        this.result = this.currentjson.rates.ANG
      }
      if(this.cont2 == 'ILS'){
        this.result = this.currentjson.rates.ILS
      }
      if(this.cont2 == 'NZD'){
        this.result = this.currentjson.rates.NZD
      }
      if(this.cont2 == 'NIO'){
        this.result = this.currentjson.rates.NIO
      }
      if(this.cont2 == 'NGN'){
        this.result = this.currentjson.rates.NGN
      }
      if(this.cont2 == 'NOK'){
        this.result = this.currentjson.rates.NOK
      }
      if(this.cont2 == 'OMR'){
        this.result = this.currentjson.rates.OMR
      }
      if(this.cont2 == 'MRU'){
        this.result = this.currentjson.rates.MRU
      }
      if(this.cont2 == 'TOP'){
        this.result = this.currentjson.rates.TOP
      }
      if(this.cont2 == 'PKR'){
        this.result = this.currentjson.rates.PKR
      }
      if(this.cont2 == 'XPD'){
        this.result = this.currentjson.rates.XPD
      }
      if(this.cont2 == 'PAB'){
        this.result = this.currentjson.rates.PAB
      }
      if(this.cont2 == 'PGK'){
        this.result = this.currentjson.rates.PGK
      }
      if(this.cont2 == 'PYG'){
        this.result = this.currentjson.rates.PYG
      }
      if(this.cont2 == 'PEN'){
        this.result = this.currentjson.rates.PEN
      }
      if(this.cont2 == 'PHP'){
        this.result = this.currentjson.rates.PHP
      }
      if(this.cont2 == 'XPT'){
        this.result = this.currentjson.rates.XPT
      }
      if(this.cont2 == 'PLN'){
        this.result = this.currentjson.rates.PLN
      }
      if(this.cont2 == 'GBP'){
        this.result = this.currentjson.rates.GBP
      }
      if(this.cont2 == 'QAR'){
        this.result = this.currentjson.rates.QAR
      }
      if(this.cont2 == 'XRP'){
        this.result = this.currentjson.rates.XRP
      }
      if(this.cont2 == 'RON'){
        this.result = this.currentjson.rates.RON
      }
      if(this.cont2 == 'RUB'){
        this.result = this.currentjson.rates.RUB
      }
      if(this.cont2 == 'RWF'){
        this.result = this.currentjson.rates.RWF
      }
      if(this.cont2 == 'SHP'){
        this.result = this.currentjson.rates.SHP
      }
      if(this.cont2 == 'SVC'){
        this.result = this.currentjson.rates.SVC
      }
      if(this.cont2 == 'STD'){
        this.result = this.currentjson.rates.STD
      }
      if(this.cont2 == 'SAR'){
        this.result = this.currentjson.rates.SAR
      }
      if(this.cont2 == 'XDR'){
        this.result = this.currentjson.rates.XDR
      }
      if(this.cont2 == 'RSD'){
        this.result = this.currentjson.rates.RSD
      }
      if(this.cont2 == 'SCR'){
        this.result = this.currentjson.rates.SCR
      }
      if(this.cont2 == 'SLL'){
        this.result = this.currentjson.rates.SLL
      }
      if(this.cont2 == 'XAG'){
        this.result = this.currentjson.rates.XAG
      }
      if(this.cont2 == 'SGD'){
        this.result = this.currentjson.rates.SGD
      }
      if(this.cont2 == 'SBD'){
        this.result = this.currentjson.rates.SBD
      }
      if(this.cont2 == 'SOS'){
        this.result = this.currentjson.rates.SOS
      }
      if(this.cont2 == 'TJS'){
        this.result = this.currentjson.rates.TJS
      }
      if(this.cont2 == 'ZAR'){
        this.result = this.currentjson.rates.ZAR
      }
      if(this.cont2 == 'KRW'){
        this.result = this.currentjson.rates.KRW
      }
      if(this.cont2 == 'SSP'){
        this.result = this.currentjson.rates.SSP
      }
      if(this.cont2 == 'LKR'){
        this.result = this.currentjson.rates.LKR
      }
      if(this.cont2 == 'SDG'){
        this.result = this.currentjson.rates.SDG
      }
      if(this.cont2 == 'SRD'){
        this.result = this.currentjson.rates.SRD
      }
      if(this.cont2 == 'SZL'){
        this.result = this.currentjson.rates.SZL
      }
      if(this.cont2 == 'SEK'){
        this.result = this.currentjson.rates.SEK
      }
      if(this.cont2 == 'CHF'){
        this.result = this.currentjson.rates.CHF
      }
      if(this.cont2 == 'SYP'){
        this.result = this.currentjson.rates.SYP
      }
      if(this.cont2 == 'TWD'){
        this.result = this.currentjson.rates.TWD
      }
      if(this.cont2 == 'WST'){
        this.result = this.currentjson.rates.WST
      }
      if(this.cont2 == 'TZS'){
        this.result = this.currentjson.rates.TZS
      }
      if(this.cont2 == 'THB'){
        this.result = this.currentjson.rates.THB
      }
      if(this.cont2 == 'TTD'){
        this.result = this.currentjson.rates.TTD
      }
      if(this.cont2 == 'TND'){
        this.result = this.currentjson.rates.TND
      }
      if(this.cont2 == 'TRY'){
        this.result = this.currentjson.rates.TRY
      }
      if(this.cont2 == 'TMT'){
        this.result = this.currentjson.rates.TMT
      }
      if(this.cont2 == 'UGX'){
        this.result = this.currentjson.rates.UGX
      }
      if(this.cont2 == 'UAH'){
        this.result = this.currentjson.rates.UAH
      }
      if(this.cont2 == 'CLF'){
        this.result = this.currentjson.rates.CLF
      }
      if(this.cont2 == 'UYU'){
        this.result = this.currentjson.rates.UYU
      }
      if(this.cont2 == 'UZS'){
        this.result = this.currentjson.rates.UZS
      }
      if(this.cont2 == 'VUV'){
        this.result = this.currentjson.rates.VUV
      }
      if(this.cont2 == 'VEF'){
        this.result = this.currentjson.rates.VEF
      }
      if(this.cont2 == 'VND'){
        this.result = this.currentjson.rates.VND
      }
      if(this.cont2 == 'XOF'){
        this.result = this.currentjson.rates.XOF
      }
      if(this.cont2 == 'YER'){
        this.result = this.currentjson.rates.YER
      }
      if(this.cont2 == 'ZMW'){
        this.result = this.currentjson.rates.ZMW
      }

      
    })
  }
}

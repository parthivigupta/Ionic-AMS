import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers, Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  agr_type: any
  v_from: any;
  to_from: any;
  desc: any;
  currency: any;
  calc_bs: any;
  vend: any;
  part: any;
  Set_calle: any
  head = [];
  item_details = [];
  store_details = [];
  tier_details = [];
  vend_details = [];
  postdata: any;
  constructor(private http: HttpClient, private https: Http) {

  }

  getVendor() {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/rebates.svc/VendorMasters').subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        })
    })
  }
  getDepartment() {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/rebates.svc/DepartmentMasters').subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        })
    })
  }
  getItem(dept) {
    var url = "http://localhost:8080/rebates.svc/ItemMasters?$filter=Department eq'" + dept + "'";
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        })
    })
  }
  getStores() {
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/rebates.svc/StoreMasters').subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        })
    })
  }
  getAgreemnetHeader(vender) {
    var url = "http://localhost:8080/rebates.svc/AgreementHeaders?$filter=SettlPartner eq'" + vender + "'";
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        })
    })
  }
  getAgreemnetHeaderall() {
    var url = "http://localhost:8080/rebates.svc/AgreementHeaders" ;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        })
    })
  }
  public getAccrualhdr(agr) {
    var url = "http://localhost:8080/rebates.svc/AccrualHeaders?$filter=AgreementNumber eq " +agr;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data =>
        resolve(data));

    })
  }

  getAccrualitem(value) {
    var url = "http://localhost:8080/rebates.svc/AccrualHeaders(" + value + ")/AccrualItemsDetails";
    return new Promise(resolve => {
      this.http.get(url).subscribe(data =>
        resolve(data));

    })
  }

  getTRheader(vend) {
    var url = "http://localhost:8080/rebates.svc/TR_Headers?$filter=Trparty eq " + vend;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data =>
        resolve(data));

    })
  }
  getTRitem(trnum) {
    var url = "http://localhost:8080/rebates.svc/TR_Itemss?$filter=Trid eq " + trnum;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data =>
        resolve(data));

    })
  }
  getAgrItem(agr) {
    var url = "http://localhost:8080/rebates.svc/AgreementItemss?$filter=AgrNum eq " + agr;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data =>
        resolve(data));

    })
  }
  getAgrstore(agr) {
    var url = "http://localhost:8080/rebates.svc/AgreementStoress?$filter=AgrNum eq " + agr;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data =>
        resolve(data));

    })
  }
  getAgrtier(agr){
    var url = "http://localhost:8080/rebates.svc/AgreementTierss?$filter=AgrNum eq " + agr;
    return new Promise(resolve => {
      this.http.get(url).subscribe(data =>
        resolve(data));

    })
  }
  SetHeadrdetail(type, v_from, v_to, desc, curr, calc, vend, part, calen) {
    this.agr_type = type; this.v_from = v_from; this.to_from = v_to;
    this.desc = desc; this.calc_bs = calc; this.currency = curr; this.part = part;
    this.Set_calle = calen;

    let array1 = { 'VendorNumber': vend }
    this.vend_details.push(array1)
  }
  SetItem(dept_item) {
    this.item_details = dept_item
  }
  SetTier(to, from, rate) {
    let array = { 'TierFrom': from, 'TierRate': rate, 'TierSequence': 1, 'TierTo': to }
    this.tier_details.push(array);
  }
  setstore(store) {
    this.store_details = store;

  }
  CreateAgreemnt() {
    let array;
    this.postdata = [];
    this.postdata =
      {
        'AgrDesc': this.desc, 'AgrType': this.agr_type, 'CalcBasis': this.calc_bs, 'Country': 'GB', 'PaymentTerms': 'Z000',
        'SettlCalender': 'ZI', 'SettlCurrency': this.currency, 'SettlPartner': this.part, 'ValidFrom': this.v_from,
        'ValidTo': this.to_from, 'AgreementItemsDetails': this.item_details,
        'AgreementStoresDetails': this.store_details, 'AgreementVendorDetails': this.vend_details,
        'AgreementTiersDetails': this.tier_details
      }

    // let postdata  = JSON.stringify(array1);
    // console.log(array1);
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    //const requestOpt = new RequestOptions({ headers: headers });
    this.https.post("http://localhost:8080/rebates.svc/AgreementHeaders", this.postdata, { headers: headers })
      .subscribe(data => {
        array = JSON.parse(data['_body']);
        console.log(array.d.AgrNum)
        alert('Agreement Number :' + array.d.AgrNum);
      }, error => {
        console.log(error);
      });
  }

  PostRebate(){

    var headers = new Headers();
    headers.append('Content-Type', 'application/xml');
    headers.append('WMT-API-KEY',  '2f3f90aa-c52d-4176-927f-e4a667236d31');
    headers.append('WMT-API-SECRET', 'R0aT2sU5oV5eV0tV2rV7sB7eC1yV4tL5xV6hH5rS8rR2cI6aT7');

    // Hard Coded Value for Body
    let xmlbody = "<?xml version=\"1.0\" encoding=\"ISO-8859-15\"?>\r\n<receivablePostRequest>\r\n  <meta>\r\n    <serviceVersion>1.0</serviceVersion>\r\n    <schemaVersion>1.0</schemaVersion>\r\n  </meta>\r\n  <data>\r\n    <header>\r\n    <cnsmrId/>\t\r\n      <tranId>Parthivi MX Testing - AMS 002</tranId>\r\n    </header>\t\r\n    <receivableEntries>\r\n      <receivableEntry>\r\n        <docDate>20181026</docDate>\r\n        <docHeaderText></docHeaderText>\r\n        <sourceId>CURIOS</sourceId>\r\n        <ledgerSystem>Finance</ledgerSystem>\r\n        <centralBuyingRegion>MX</centralBuyingRegion>\r\n        <currency>MXN</currency>\r\n        <country>MX</country>\r\n        <postingDate>20181026</postingDate>\r\n        <referenceKey1/>\r\n        <leadCompany>C031</leadCompany>\r\n\t\t\r\n        <receivableEntryLineItems>\r\n          <receivableEntryLineItem>\r\n            <assignmentNbr></assignmentNbr>\r\n            <referenceNbr>77322895</referenceNbr>\r\n            <docInfo>5137PROV_SETIEMBRE 2018_CFE_EDD0008</docInfo>\r\n            <department></department>\r\n            <legacyPO></legacyPO>\r\n            <accountType>C</accountType>\r\n            <accountID>1000252131</accountID>\r\n            <postCompany>C031</postCompany>\r\n            <postProfitCenter>MX04985R</postProfitCenter>\r\n            <costAmount>100</costAmount>\r\n          </receivableEntryLineItem>\r\n\t\t  \r\n          <receivableEntryLineItem>\r\n            <assignmentNbr></assignmentNbr>\r\n            <referenceNbr>77322895</referenceNbr>\r\n            <docInfo>5137PROV_SETIEMBRE 2018_CFE_EDD0008</docInfo>\r\n            <department>999</department>\r\n            <legacyPO></legacyPO>\r\n            <accountType>G</accountType>\r\n            <accountID>2305004</accountID>\r\n            <postCompany>C031</postCompany>\r\n            <postProfitCenter>MX04985R</postProfitCenter>\r\n            <costAmount>-100</costAmount>\r\n          </receivableEntryLineItem>\r\n          </receivableEntryLineItems>\r\n      </receivableEntry>\r\n    </receivableEntries>\r\n  </data>\r\n</receivablePostRequest>";
    
    this.https.post("https://api.qa.wal-mart.com/si/bofar/api/receivablePost", xmlbody, { headers: headers })
    .subscribe(data => {
      var array = data['_body'];
      console.log(array);
      alert('In this block');
    }, error => {
      console.log(error);
    });

  }


}

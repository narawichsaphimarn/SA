import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PeriodicElement } from '../../component-ns-ui-show/component-ns-ui-show.component';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelatedInformationService {
  dataTemp = new Subject<String>();
  public API = '//localhost:8080';
  private serviceUrl = 'http://localhost:8080/RelatedInformation';   
  constructor(private http: HttpClient) { }

  getAgencyName(): Observable<any> {
    return this.http.get(this.API + '/agencyType');
  }

  getCountryName(): Observable<any> {
    return this.http.get(this.API + '/Country');
  }

  getProvinceName(): Observable<any> {
    return this.http.get(this.API + '/Province');
  }

  getRelatedInformationUI(): Observable<any> {
    return this.http.get(this.API + '/RelatedInformation');
  }

  getContactTimeName(): Observable<any> {
    return this.http.get(this.API + '/ContactTime');
  }

  getRIName(RIName): Observable<any> {
    return this.http.get(this.API + '/RelatedInformation/'+RIName);
  }

  getShow():Observable<PeriodicElement[]>{
    return this.http.get<PeriodicElement[]>(this.serviceUrl);
  }
}

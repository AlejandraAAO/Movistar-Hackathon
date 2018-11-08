import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  private url = 'https://mandrillapp.com/api/1.0/messages/send.json';
  constructor(private _http: HttpClient) { }

  sendEmail(data): Observable<any> {
    return this._http.post(this.url, data);
  }
}

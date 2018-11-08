import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CulqiService {
 // private _url: string = 'https://api.culqi.com/v2/tokens';
  constructor(private _http: HttpClient) { }
}

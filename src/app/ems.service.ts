import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmsService {

  constructor(private httpClient: HttpClient) { } 

  getDataFromEMS(apiURL) {
    return this.httpClient.get(apiURL)
  }

  addDataToEMS(apiURL, empObj) {
    return this.httpClient.post(apiURL, empObj)
  }

  updateDataToEMS(apiURL, empObj) {
    return this.httpClient.put(apiURL, empObj)
  }

  deleteDataFromEMS(apiURL) {
    return this.httpClient.delete(apiURL)
  }
}

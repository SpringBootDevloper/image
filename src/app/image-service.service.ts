import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'http://localhost:8080'; // Adjust the URL according to your backend setup

  constructor(private http: HttpClient) {}

  getImage(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/files/${id}`, { responseType: 'blob' });
  }
}

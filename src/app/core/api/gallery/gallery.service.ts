import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';
import { Image } from './model/image.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private basePath = environment.apiUrl + '/images';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Image[]> {
    return this.http.get<Image[]>(this.basePath);
  }
}

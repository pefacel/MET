import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtObjectResponse } from 'src/app/shared/models/art-object-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtObjectService {

  constructor(private httpClient: HttpClient) { }


  getObjectById(id: any): Observable<ArtObjectResponse> {
    return this.httpClient.get<ArtObjectResponse>(environment.endpointArtObject + id);
  }

}

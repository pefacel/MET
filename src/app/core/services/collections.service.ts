import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionResponse } from 'src/app/shared/models/collection-response';
import { CollectionsResponse } from 'src/app/shared/models/collections-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private httpClient: HttpClient) { }

  getCollections(): Observable<CollectionsResponse> {
    return this.httpClient.get<CollectionsResponse>(environment.endpointCollections);
  }



  getCollectionById(id: any): Observable<CollectionResponse> {
    return this.httpClient.get<CollectionResponse>(environment.endpointCollection + id);
  }


}

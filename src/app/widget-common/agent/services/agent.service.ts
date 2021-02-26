import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(public http: HttpClient) { }

  getAgentListData(groupId: any): Observable<any>{
    return this.http.get<any>("http://localhost:51382/api/User/GetUsersByGroupID?groupId=" + groupId);
  }
}

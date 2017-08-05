import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // MUST BE MANUALLY INSERTED!
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable'; // MUST BE MANUALLY INSERTED!
import 'rxjs/add/operator/catch'; // MUST BE MANUALLY INSERTED!
import 'rxjs/add/operator/map'; // MUST BE MANUALLY INSERTED!
import 'rxjs/add/operator/toPromise'; // MUST BE MANUALLY INSERTED!

@Injectable()
export class HttpService {

  constructor(private _http: Http) { } // DEPENDENCY INJECTION! Using Http from angular module imported from above
  retrieveGitHubInfo(username) {
    console.log('Retrieving data for', username, 'from GitHub works');
    return this._http.get('https://api.github.com/users/'+username).map(data=>data.json()).toPromise()
  }

}

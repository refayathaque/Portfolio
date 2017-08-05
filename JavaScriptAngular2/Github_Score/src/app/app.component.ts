import { Component, OnChanges } from '@angular/core';
import { HttpService } from './http.service'; // MUST BE DONE MANUALLY FOR SERVICES

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GitHub Score';
  GitHubInfo : object;
  username = "";
  followers : number;
  public_repos : number;
  score : number;

  constructor(private _httpService: HttpService){} // DEPENDENCY INJECTION! Using HttpService from class exported above from service.ts

  getRefayatGitHubInfo(){
      this._httpService.retrieveGitHubInfo(this.username)
      .then( data => { this.GitHubInfo = data, this.followers = data.followers, this.public_repos = data.public_repos, this.score = (data.public_repos + data.followers) })
       // .then is PROMISE which in essence is a CALLBACK calling a CALLBACK method
      .catch( err => { console.log(err); })
  }

}

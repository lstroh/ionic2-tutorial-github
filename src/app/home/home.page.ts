import { Component } from '@angular/core';
import { GitHubService } from '../../services/github';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [GitHubService],
})
export class HomePage {

  public foundRepos;
    public username;

    constructor(private github: GitHubService) {
    }

    getRepos() {
        this.github.getRepos(this.username).subscribe(
            data => {
                this.foundRepos = data.json();
            },
            err => console.error(err),
            () => console.log('getRepos completed')
        );
    }

}

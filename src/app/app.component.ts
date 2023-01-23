import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-first-project';
  sectionSelected:String = "recipes";
  toggleSection(section:String){
    this.sectionSelected = section
  }
}

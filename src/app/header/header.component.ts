import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() navigationSectionSelected :  EventEmitter<String> = new EventEmitter();
  navigationSection:String = "";
  
  onSelectNavigationSection(section:String){
    this.navigationSection = section;
    this.navigationSectionSelected.emit(this.navigationSection);
  }
  

}

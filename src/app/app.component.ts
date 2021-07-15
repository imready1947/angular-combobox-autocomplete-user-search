import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  itemList = [{id: '1', firstName: 'carrot', lastName:"ccc", email: "abc@kpmg.com"}, {id: '2', firstName: 'Bananaa', lastName:"bbb", email: "ttt@kpmg.com"},{id: '3', firstName: 'apple', lastName:"aaa", email: "mmm@kpmg.com"},{id: '4', firstName: 'graps', lastName:"ggg", email: "yyy@kpmg.com"},{id: '5', firstName: 'sdf', lastName:"sss", email: "zzz@kpmg.com"},];
  
}

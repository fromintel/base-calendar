import { Component, TemplateRef } from '@angular/core';
import {  BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'calendar';

  constructor() { }


 
}

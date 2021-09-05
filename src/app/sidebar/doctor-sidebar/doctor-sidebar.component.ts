import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-doctor-sidebar',
  templateUrl: './doctor-sidebar.component.html',
  styleUrls: ['./doctor-sidebar.component.scss']
})
export class DoctorSidebarComponent implements OnInit {

  constructor(private common:CommonService) { }

  ngOnInit(): void {
  }

  logout(){
    this.common.signOut();
  }
}

import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private common: CommonService) {
  }

  ngOnInit(): void {

  }

}

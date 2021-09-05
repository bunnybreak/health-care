import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommonService} from './common.service';
import { NavigationStart, Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'healthcare';
    isLogin: Boolean = false;
    isLoginDetails: any = null;

    constructor(private common: CommonService,private router:Router) {

        this.router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                if (event['url'] === '/login' ||
                    event['url'] === '/forgot-password' ||
                    event['url'] === '/change-password' ||
                    event['url'] === '/gateway-pg-response' ||
                    event['url'] === '/signup') {
                    this.isLogin = false;
                } else {
                    this.isLogin = true;
                    this.common.isLogin().then((userdata: any) => {
                        this.isLoginDetails = userdata;
                    });
                }
            }
        });


    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {

    }
}

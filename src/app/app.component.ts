import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'healthcare';
    isLogin: Boolean = false;

    ngOnInit() {
        if (typeof (localStorage.getItem('sessionLogin')) !== 'undefined' && localStorage.getItem('sessionLogin') !== '' && localStorage.getItem('sessionLogin') !== null) {
            this.isLogin = true;
        }
    }

    ngAfterViewInit(): void {
        if (typeof (localStorage.getItem('sessionLogin')) !== 'undefined' && localStorage.getItem('sessionLogin') !== '' && localStorage.getItem('sessionLogin') !== null) {
            this.isLogin = true;
        }
    }
}

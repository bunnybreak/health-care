import {Component, OnInit} from '@angular/core';
import {LoaderService} from '../loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

    public isActive:boolean = true;

    constructor(private loader: LoaderService) {
        this.loader.isLoading.subscribe((v) => {
            this.isActive = v;
        });
    }

    ngOnInit(): void {
    }

}

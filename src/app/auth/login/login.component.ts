import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private http: HttpClient, private fb: FormBuilder,private route:Router) {
        this.form = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit(): void {
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res) => {
            /*if (res.statusCode == 200) {
                console.log(res);
            }*/
        });
    }

    onSubmit() {
        const fdata = new FormData();
        fdata.append('username', this.form.get('username')?.value);
        fdata.append('password', this.form.get('password')?.value);
        localStorage.setItem('sessionLogin', JSON.stringify({username: this.form.get('username')?.value}));
        this.route.navigate(['dashboard']);
    }

    get f() {
        return this.form.controls;
    }
}

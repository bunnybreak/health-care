import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Auth} from '@aws-amplify/auth';
import {LoaderService} from '../../loader.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private http: HttpClient, private fb: FormBuilder, private route: Router, private loader: LoaderService) {
        this.form = this.fb.group({
            username: ['nikhildoda', [Validators.required]],
            password: ['admin@2021', [Validators.required]]
        });
    }

    ngOnInit(): void {

    }

    async onSubmit() {
        let username = this.form.get('username')?.value;
        let password = this.form.get('password')?.value;
        this.loader.isLoading.next(true);
        try {
            var user = await Auth.signIn(username.toString(), password.toString());
            var tokens = user.signInUserSession;
            if (tokens != null) {
                console.log('User authenticated');
                this.route.navigate(['dashboard']);
            }
        } catch (error) {
            console.log(error);
            alert(error);
        }
        this.loader.isLoading.next(false);
    }

    register() {
        try {
            const user = Auth.signUp({
                username: 'nikhildoda',
                password: 'admin@2021',
                attributes: {
                    name: 'Nikhil Doda',
                    email: 'hackkthehackkers@gmail.com'
                }
            });
            console.log(user);
            alert('User signup completed , please check verify your email.');
            this.route.navigate(['login']);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    get f() {
        return this.form.controls;
    }
}

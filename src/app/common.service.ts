import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from 'aws-amplify';


@Injectable({
    providedIn: 'root'
})
export class CommonService {
    private isLoginDetails: any = false;

    constructor(private router: Router) {
        /*if (typeof (localStorage.getItem('sessionLogin')) !== 'undefined' && localStorage.getItem('sessionLogin') !== '' && localStorage.getItem('sessionLogin') !== null) {
            // @ts-ignore
            let sessionLogin = localStorage.getItem('sessionLogin').toString();
            this.isLoginDetails = JSON.parse(sessionLogin);
        }*/
    }

    isLogin(redirect: Boolean = false) {
         return Auth.currentAuthenticatedUser()
            .then(userData => {
                this.isLoginDetails = userData.attributes;
            })
            .catch(() => {
                console.log('Not signed in');
                if (redirect) {
                    this.router.navigate(['login']);
                }
            });
    }

    async signOut() {
        try {
            //{ global: true }
            await Auth.signOut();
            this.router.navigate(['login']);
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {LoaderService} from './loader.service';
import {CommonService} from './common.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  AuthOnboard: any;
  private requests: HttpRequest<any>[] = [];
  constructor(
      private loader: LoaderService,
      private route: Router,
      private common:CommonService
  ) { }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
    this.loader.isLoading.next(this.requests.length > 0);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests.push(req);
    let headers = new HttpHeaders({
    });
    this.loader.isLoading.next(true);
    const cloneReq = req.clone({ headers });
    return new Observable(observer => {
      const subscription = next.handle(cloneReq)
          .subscribe(
              event => {
                if (event instanceof HttpResponse) {
                  if (event.body.statuscode == 404 || event.body.statuscode == 201 || event.body.statuscode == 202) {

                    this.common.signOut();
                  }else if(event.body.statuscode == 2020 || event.body.statuscode == 203){

                    this.route.navigate(['/']);
                  }
                  else {
                    this.removeRequest(req);
                    observer.next(event);
                  }
                }
              },
              err => {
                //alert('error' + err);
                this.removeRequest(req);
                observer.error(err);
              },
              () => {
                this.removeRequest(req);
                observer.complete();
              });
      // remove request from queue when cancelled
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
    //const cloneReq = req.clone({headers});
    //return next.handle(cloneReq);
  }
}

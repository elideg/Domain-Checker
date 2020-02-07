import { NotifyService } from './../notify.service';
import { QUERY_KEY, QUERY_HOST_URL } from './../../../../../.env';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private notify: NotifyService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone<{x_rapidapi_key: string}>({
      setHeaders: {
        // Host: `${QUERY_HOST_URL}`,
        "content-type":"application/octet-stream",
        "x-rapidapi-host": "domaination.p.rapidapi.com",
        "x-rapidapi-key": `${QUERY_KEY}`
      },
    })
    return next.handle(request).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap(() => {}, (error) => this.notify.notification(error.message))
    )
  }
}

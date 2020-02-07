import { RouterModule } from '@angular/router';
import { NotifyService } from '@domain-checker/core-data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomainService } from '@domain-checker/core-data';
import { Domain } from '@domain-checker/core-data';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'domain-checker-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {
  form: FormGroup
  domainSearchResults$: Observable<Domain[]>;
  openPanel = true;

  constructor(
    private fb: FormBuilder,
    private domainService: DomainService,
    private notifyService: NotifyService,
    private router: RouterModule
  ) { }

  ngOnInit() {
    this.initForm();
    this.search();
  }

  search() {
    if(this.form.invalid) {
      this.notifyService.notification('Enter a Domain to Search')
    } else {
      this.domainSearchResults(this.form.value.domainSearch).pipe(
        map((res: any) => this.domainSearchResults$ = res.domain),
        ).subscribe();
      this.notifyService.notification(`Searching ${this.form.value.domainSearch}`);
    }
  }

  domainSearchResults(value) {
    return this.domainService.search(value);
  }

  initForm() {
    this.form = this.fb.group({
      domainSearch: ['', Validators.required]
    })
  }

}

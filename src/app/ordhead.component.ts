import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'ord-head',
  templateUrl: `./ordhead.component.html`,
  styleUrls: [ './app.component.css' ]
})
export class OrdHeadComponent  {
  @Input() name: string;
   addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });
 
  constructor(private fb: FormBuilder) {}
  onSubmit() {
    alert('Thanks!');
  }
}

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QuoteComponent implements OnInit{
  form: FormGroup | any;
  @Input() options: any = '';
  @Input() selected = 'option-1';
  submitted = false; 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, {validators: [Validators.required, Validators.email]}),
      'phone': new FormControl(null, {validators: [Validators.required, Validators.minLength(10)]}),
      'name': new FormControl(null, {validators: [Validators.required, this.nameValidator()]}),
      'message': new FormControl(null, {validators: [Validators.required]})
    });
  }

  onSubmit(){
    // if(this.form?.invalid){
    //   return
    // }
    this.submitted = true; 
    this.form?.reset();
  }
  resetForm() {
    this.submitted = false; // Reset the submitted flag
    this.form.reset(); // Reset the form controls
  }
  nameValidator(): (control: FormControl) => ValidationErrors | null {
    const nameRegex = /^[a-zA-Z\s\-]+$/; 
    return (control: FormControl): ValidationErrors | null => {
      const valid = nameRegex.test(control.value);
      return valid ? null : { invalidName: true };
    };
  }
}

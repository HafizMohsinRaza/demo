import { Component } from '@angular/core';

@Component({
  selector: 'app-ourproject',
  templateUrl: './ourproject.component.html',
  styleUrls: ['./ourproject.component.css']
})
export class OurprojectComponent {
  options: any = [
    {value: 'option-0', viewValue: 'PSA Nitrogen Generation Plant'},
    {value: 'option-1', viewValue: 'PSA Oxygen Generation Plant'},
    {value: 'option-2', viewValue: 'Ammonia Cracking Purifier Unit'},
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-supplypolicy',
  templateUrl: './supplypolicy.component.html',
  styleUrls: ['./supplypolicy.component.css']
})
export class SupplypolicyComponent {
  options: any = [
    {value: 'option-0', viewValue: 'PSA Nitrogen Generation Plant'},
    {value: 'option-1', viewValue: 'PSA Oxygen Generation Plant'},
    {value: 'option-2', viewValue: 'Ammonia Cracking Purifier Unit'},
  ]
}

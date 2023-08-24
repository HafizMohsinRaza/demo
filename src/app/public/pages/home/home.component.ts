import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  options: any = [
    {value: 'option-0', viewValue: 'PSA Nitrogen Generator'},
    {value: 'option-1', viewValue: 'PSA Oxygen Generator'},
    {value: 'option-2', viewValue: 'Cryogenic Gas plants'},
    {value: 'option-4', viewValue: 'Ammonia Cracker'},
    {value: 'option-5', viewValue: 'Air dryers'},
  ]
  questions: any =[
    {
      id: 1,
      label: 'How do we obtain a quotation?',
      show: false,
      option: 'Drop us an email with your inquiry at info@gaztron.in, and we\'ll send you a quote.'
    },
    {
      id: 2,
      label: 'Do you offer post-purchase services?',
      show: false,
      option: 'Absolutely, we offer after-sales services to customers all around the world.'
    },
    {
      id: 3,
      label: 'What is the time frame for delivery?',
      show: false,
      option: 'Typically, 45 days.'
    },
    {
      id: 4,
      label: 'What is your primary manufacturing product?',
      show: false,
      option: 'We manufacture the following types of gas plants:\n\n1. PSA Nitrogen Gas Plants\n2. Ammonia Cracker\n3. Gas Storage Tanks\n4. PSA Oxygen Gas Plants\n5. Air Dryer\n6. Cryo Plants'
    },
    {
      id: 5,
      label: 'Is Your Business International Quality Standard Certified?',
      show: false,
      option: 'Indeed, Gaztron India has received ISO 9001:2015 certification from TÜV Rheinland Germany.'
    },
    {
      id: 6,
      label: 'How do you handle product packaging?',
      show: false,
      option: 'We pack equipment in accordance with international standards.'
    },
    {
      id: 7,
      label: 'Has a statutory authority approved your manufacturing facility?',
      show: false,
      option: 'Yes, Gaztron has secured the necessary legal licenses, in addition to the fact that this facility has NSIC approval.',
    },
  ];
}

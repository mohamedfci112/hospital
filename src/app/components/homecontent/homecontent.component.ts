import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.css']
})
export class HomecontentComponent implements OnInit {
  cards = [
    {
      title: 'Intensive Care Unit',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/intensive care unit.jpg'
    },
    {
      title: 'Operating Thearts',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/operation-thearts.jpg'
    },
    {
      title: 'Dental Department',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/dental.jpg'
    },
    {
      title: 'The Cardiac Cath Lab',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/cardiac-cath-lab.jpg'
    },
    {
      title: 'Radiology',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/Radiology.jpg'
    },
    {
      title: 'Audiology and Speech',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/Speech-or-Audiology.jpg'
    },
    {
      title: 'Emergency Department',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/Emergency.jpg'
    },
    {
      title: 'In-Patient Division',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/inpatient devision.jpg'
    },
    {
      title: 'Out-Patient Clinics',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: '../../../assets/img/outpatient.jpg'
    }
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  constructor() { }

  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 3);
  }

}

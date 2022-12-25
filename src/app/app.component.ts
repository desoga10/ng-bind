import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prop-binding';
  isShowImage = false;
  educativeLogo =
    'https://res.cloudinary.com/dz4tt9omp/image/upload/v1671977557/educate.png';
  angularLogo =
    'https://res.cloudinary.com/dz4tt9omp/image/upload/v1671977926/angula.png';

  imageToggler() {
    this.isShowImage = !this.isShowImage;
    console.log('this.isShowImage');
  }
}

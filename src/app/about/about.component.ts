import { Component } from '@angular/core';
import { About } from '../_models/about';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  about: string =
    'Hakkımızda alanı - Lezzet Durağı, yıllardır en kaliteli pizza ve hamburgerleri müşterileriyle buluşturuyor. Taptaze malzemelerle hazırlanan menümüz, damak tadınıza hitap edecek.';
  abouts: string[] = [
    'Hakkımızda 1',
    'Hakkımızda 2',
    'Hakkımızda 3',
    'Hakkımızda 4',
    'Hakkımızda 5',
  ];
  aboutModel: About = { id: 1, title: 'Başlık', descripton: 'Açıklama' };
  aboutModel3: About = { id: 3, title: 'Başlık3', descripton: 'Açıklama3' };
  aboutModel4: About = { id: 4, title: 'Başlık4', descripton: 'Açıklama4' };
  aboutModel2: About = { id: 2, title: 'Başlık2', descripton: 'Açıklama2' };

  aboutModels: About[] = [this.aboutModel,this.aboutModel2,this.aboutModel3,this.aboutModel4,];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-house',
  imports: [CommonModule],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {



  
  house = [
    { title: 'La 27 de febrero', text: 'Av. 27 de Febrero #429, Santo Domingo.', img: '501673-arenas-de-barcelona.webp', nH: "3", mC:'120', nG: '2'  },
    { title: 'U.S.A', text: 'Av. George Washington #1, Santo Domingo.', img: 'About_the_USA_NYC_Statue_Liberty_._CROP_Web72DPI.jpg', nH: "3", mC:'120', nG: '2' },
    { title: 'Lincoln', text: 'Av. Abraham Lincoln, Santo Domingo.', img: 'K71TBD.webp', nH: "3", mC:'120', nG: '2'  },
    { title: 'San Vicente', text: 'Av. San Vicente de Paúl, Santo Domingo Este.', img: 'photo-1502602898657-3e91760cbb34.jpg', nH: "3", mC:'120', nG: '2'  },

  ];

}
